"use client";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const [checked, setChecked] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const { id } = useParams();
  const router = useRouter();

  console.log(id);

  const formik = useFormik({
    initialValues: {
      confirmationName: "",
      confirmationAddress: "",
      confirmationBirthdate: "",
      confirmationEducation: "",
      confirmationJob: "",
      confirmationSIM: "",
      confirmationSIMExpiry: "",
      confirmationSIMPub: "",
      confirmationPhone: "",
      confirmationEmail: "",
      // confirmationDate: "",
    },
    validationSchema: yup.object().shape({
      confirmationName: yup.string().required("Required"),
      // confirmationAddress: yup.string().required("Required"),
      // confirmationBirthdate: yup.string().required("Required"),
      // confirmationEducation: yup.string().required("Required"),
      // confirmationJob: yup.string().required("Required"),
      // confirmationSIM: yup.string().required("Required"),
      // confirmationSIMExpiry: yup.string().required("Required"),
      // confirmationSIMPub: yup.string().required("Required"),
      // confirmationPhone: yup.string().required("Required"),
      // confirmationEmail: yup.string().required("Required"),
      // confirmationDate: yup.string().required("Required"),
    }),

    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const formData = {
        ...values,
        id: id,
        confirmationDate: new Date().toISOString(),
      };
      axios
        .post("http://localhost:8001/confirmation", formData)
        .then((response) => {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
          setSubmitting(false);
        })
        .then((response) => {
          setTimeout(() => {
            router.push("/");
          }, 2000);
        })
        .catch((error) => {
          setErrorMessage(true);
          setTimeout(() => {
            setErrorMessage(false);
          }, 3000);
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="md:px-96">
      <div className="divider">
        <b>Konfirmasi Pelanggar</b>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-4 space-y-4">
          <p>
            <b>Nama :</b>
          </p>
          <input
            type="text"
            placeholder="Nama"
            name="confirmationName"
            className="input input-bordered border-2 w-full "
            onChange={formik.handleChange}
          />
          <p>
            <b>Alamat :</b>
          </p>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Alamat"
            name="confirmationAddress"
            onChange={formik.handleChange}
          ></textarea>
          <p>
            <b>Tempat Tanggal Lahir :</b>
          </p>
          <input
            type="text"
            placeholder="TTL"
            className="input input-bordered w-full"
            name="confirmationBirthdate"
            onChange={formik.handleChange}
          />
          <p>
            <b>Pendidikan Terakhir :</b>
          </p>
          <input
            type="text"
            placeholder="Pendidikan Terakhir"
            className="input input-bordered w-full"
            name="confirmationEducation"
            onChange={formik.handleChange}
          />
          <p>
            <b>Pekerjaan</b>
          </p>
          <input
            type="text"
            placeholder="Pekerjaan"
            className="input input-bordered w-full"
            name="confirmationJob"
            onChange={formik.handleChange}
          />
          <p>
            <b>Gologan & NO SIM</b>
          </p>
          <input
            type="text"
            placeholder="Gologan & NO SIM"
            className="input input-bordered w-full"
            name="confirmationSIM"
            onChange={formik.handleChange}
          />
          <p>
            <b>Masa Berlaku SIM</b>
          </p>
          <input
            type="text"
            placeholder="Masa Berlaku SIM"
            className="input input-bordered w-full"
            name="confirmationSIMExpiry"
            onChange={formik.handleChange}
          />
          <p>
            <b>Tempat Penertiban SIM</b>
          </p>
          <input
            type="text"
            placeholder="Tempat Penertiban SIM"
            className="input input-bordered w-full"
            name="confirmationSIMPub"
            onChange={formik.handleChange}
          />
          <p>
            <b>Nomor Handphone</b>
          </p>
          <input
            type="text"
            placeholder="No Handphone"
            className="input input-bordered w-full"
            name="confirmationPhone"
            onChange={formik.handleChange}
          />
          <p>
            <b>Alamat Email</b>
          </p>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full "
            name="confirmationEmail"
            onChange={formik.handleChange}
          />
        </div>

        <div className="divider">
          <b>Ketentuan</b>
        </div>
        <div className="p-8 bg-slate-100 ">
          <ol className="list-decimal space-y-2 text-justify">
            <li>
              Apabila surat konfirmasi ini tidak diisi dengan nama pelanggar
              maka sesuai Perkap nomor 5 Tahun 2012 tentang Registrasi dan
              Identifikasi pada pasal 115 ayat (3) kendaraan dapat diblokir
              dalam rangka penegakan hukum pelanggar lalu lintas.
            </li>
            <li>
              Pemblokiran dilakukan oleh petugas kepolisian setelah tidak ada
              konfirmasi atau balasan dari surat ini selama 8 hari dari hasil
              capture atau bukti Pelanggaran hasil rekaman sistem Elektronik
              ETLE.
            </li>
            <li>
              Apabila Kendaraan telah terjual maka penjual diharapkan
              mencatumkan identitas dan No.HP yang valid pembeli kendaraan.
            </li>
            <li>
              Pelayanan konfirmasi di Posko, dapat dilakukan di hari kerja, pada
              Senin - Jumat.
            </li>
          </ol>
        </div>
        <div className="p-4 flex justify-center items-center gap-2">
          <input
            type="checkbox"
            className="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p>Dengan ini saya menyetujui semua ketentuan diatas</p>
        </div>
        <div className="flex justify-center my-4">
          <button className="btn btn-primary" type="submit" disabled={!checked}>
            Konfirmasi{" "}
          </button>
        </div>
      </form>

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="font-bold ">Anda telah melakukan konfirmasi</span>
          </div>
        </div>
      )}
      {errorMessage && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-bold ">Gagal menkonfirmasi</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
