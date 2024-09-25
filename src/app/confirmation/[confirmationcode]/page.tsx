"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<any>({});
  const { confirmationcode } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/confirmation/${confirmationcode}`
        );
        setData(res.data);
      } catch (err) {
        console.error("Error fetching donations:", err);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <div className="flex w-full flex-col border-opacity-50 md:px-48">
        <div className="divider">
          <b>Bukti Foto Pelanggaran</b>
        </div>
        <div className="card bg-base-300 rounded-box grid h-full place-items-center overflow-hidden">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={data?.data?.Photos_1}
              alt=""
              className="w-[200px] h-[200px] object-cover "
            />
            <img
              src={data?.data?.Photos_2}
              alt=""
              className="w-[200px] h-[200px] object-cover"
            />
          </div>
        </div>
        <div className="divider">
          <b>Info Kendaraan</b>
        </div>
        <div className="card bg-base-300 rounded-box grid h-full p-4 gap-4 ">
          <p>
            <b>Nomor Polisi : </b>
            <span>{data?.data?.PlateNo}</span>
          </p>
          <p>
            <b>Nama Pemilik : </b>
            <span>{data?.data?.OwnerName}</span>
          </p>
          <p>
            <b>Alamat Pemilik:</b>
            <br />
            {data?.data?.OwnerAddress}{" "}
          </p>
        </div>
        <div className="divider">
          <b>Detail Pelanggaran</b>
        </div>
        <div className="card bg-base-300 rounded-box grid h-full p-4 gap-4 ">
          <p>
            <b>Deskripsi Pelanggaran : </b>
            <br />
            <span>{data?.data?.Violation}</span>
          </p>
          <p>
            <b>Lokasi Pelanggaran : </b>
            <br />
            <span>{data?.data?.LocationDescription}</span>
          </p>
          <p>
            <b>Tanggal Pelanggaran : </b>
            <br />
            <span>
              {new Date(data?.data?.Date).toLocaleString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Asia/Jakarta",
                timeZoneName: "short",
              })}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary">Konfirmasi </button>
      </div>
    </div>
  );
};

export default page;
