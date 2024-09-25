"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Home = () => {
  const [noReferensi, setNoReferensi] = useState("");
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal
  const router = useRouter();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/confirmation/${noReferensi}`
        );
        setData(response.data);
        setIsModalOpen(true); // Open modal when data is fetched
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    if (noReferensi) {
      fetchData();
    }
  }, [noReferensi]);

  const handleSubmit = (event : any ) => {
    event.preventDefault();
    setNoReferensi(event.target.username.value);
  };

  const handleResubmit = () => {
    // Trigger a refetch by setting the noReferensi state again
    setIsModalOpen(false); // Close modal before resubmitting
    setNoReferensi(noReferensi); // This will trigger the useEffect again
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="items-center justify-center w-1/2">
        <div className="flex flex-col items-center">
          <img src="/image/logo.png" alt="" className="w-48" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-center">Konfirmasi Pelanggaran</h1>
          <p className="text-lg text-center w-[400px] md:w-full">
            Masukan no referensi pelanggaran anda untuk melakukan pengecekan
            pelanggaran yang dibebankan kepada kendaraan anda.
          </p>
          <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  className="border-2 border-gray-300 p-2 w-full border-rounded-md "
                  placeholder="No Referensi "
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
                disabled={loading}
              >
                {loading ? "Loading..." : "Cek"}
              </button>
            </form>
            {loading && (
              <div className="animate-spin h-5 w-5 border-b-2 border-blue-500 rounded-full"></div>
            )}
          </div>
        </div>

        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open={isModalOpen}
        >
          <div className="modal-box ">
            <h3 className="font-bold text-lg">Hasil Pengecekan Blangko</h3>
            <div className="py-4">
              {error ? (
                <p className="text-red-500">{error.message}</p>
              ) : (
                <div>
                  <h1>
                    {data?.data?.ID > 0
                      ? "Blangko ditemukan"
                      : "Blangko tidak ditemukan"}
                  </h1>
                </div>
              )}
            </div>
            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (data?.data?.ID > 0) {
                    router.push(`/confirmation/${noReferensi}`);
                  } else {
                    setIsModalOpen(false);
                    handleResubmit();
                  }
                }}
              >
                {data?.data?.ID > 0 ? "Cek Sekarang" : "Tutup"}
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Home;
