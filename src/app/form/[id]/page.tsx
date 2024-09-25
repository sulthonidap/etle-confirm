import React from "react";

const page = () => {
  return (
    <div>
      <div className="divider">
        <b>Konfirmasi Pelanggar</b>
      </div>
      <div className="p-4  space-y-2">
        <p>Nama :</p>
        <input
          type="text"
          placeholder="Nama"
          className="input input-bordered w-full max-w-xs"
        />
        <p>Alamat :</p>
        <textarea
          className="textarea textarea-bordered w-full max-w-xs"
          placeholder="Alamat"
        ></textarea>
        <p>Tempat Tanggal Lahir :</p>
        <input
          type="text"
          placeholder="TTL"
          className="input input-bordered w-full max-w-xs"
        />
        <p>Pendidikan Terakhir :</p>
        <input
          type="text"
          placeholder="Pendidikan Terakhir"
          className="input input-bordered w-full max-w-xs"
        />
        <p>Pekerjaan</p>
        <input
          type="text"
          placeholder="Pekerjaan"
          className="input input-bordered w-full max-w-xs"
        />
        <p>Gologan & NO SIM</p>
        <input
          type="text"
          placeholder="Gologan & NO SIM"
          className="input input-bordered w-full max-w-xs"
        />
        <p>Masa Berlaku SIM</p>
        <input
          type="text"
          placeholder="Masa Berlaku SIM"
          className="input input-bordered w-full max-w-xs"
        />
        <p>Tempat Penertiban SIM</p>
        <input
          type="text"
          placeholder="Tempat Penertiban SIM"
          className="input input-bordered w-full max-w-xs"
        />
        <p>Nomor Handphone</p>
        <input
          type="text"
          placeholder="No Handphone"
          className="input input-bordered w-full max-w-xs"
        />
        <p>Alamat Email</p>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs "
        />
      </div>

      <div className="divider">
        <b>Ketentuan</b>
      </div>
      <div className="p-8 bg-slate-100 ">
        <ol className="list-decimal space-y-2">
          <li>
            Apabila surat konfirmasi ini tidak diisi dengan nama pelanggar maka
            sesuai Perkap nomor 5 Tahun 2012 tentang Registrasi dan Identifikasi
            pada pasal 115 ayat (3) kendaraan dapat diblokir dalam rangka
            penegakan hukum pelanggar lalu lintas.
          </li>
          <li>
            Pemblokiran dilakukan oleh petugas kepolisian setelah tidak ada
            konfirmasi atau balasan dari surat ini selama 8 hari dari hasil
            capture atau bukti Pelanggaran hasil rekaman sistem Elektronik ETLE.
          </li>
          <li>
            Apabila Kendaraan telah terjual maka penjual diharapkan mencatumkan
            identitas dan No.HP yang valid pembeli kendaraan.
          </li>
          <li>
            Pelayanan konfirmasi di Posko, dapat dilakukan di hari kerja, pada
            Senin - Jumat.
          </li>
        </ol>
      </div>
      <div className="p-4 flex justify-between items-center gap-2">
        <input type="checkbox" defaultChecked className="checkbox" />
        <p>Dengan ini saya menyetujui semua ketentuan diatas</p>
      </div>
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary">Konfirmasi </button>
      </div>
    </div>
  );
};

export default page;
