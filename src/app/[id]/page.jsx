"use client";

import { formatDateTimeRange } from "@/services/helper";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { getActivityById, submitPresence } from "../supabase";

export default function Home({ params }) {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [saranMasukan, setSaranMasukan] = useState("");
  const [loading, setLoading] = useState(true);
  const [thank, setThank] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    getActivityById(params.id).then(({ data, error }) => {
      if (error) {
        console.log(error);
        return;
      }
      setData(data[0]);
    });
  }, []);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleNim(e) {
    let nim = e.target.value;

    if (nim.length !== 10) {
      setLoading(true);
      return;
    }

    nim = nim.replace(/\D/g, "");

    if (nim.length !== 10) {
      setLoading(true);
      return;
    }

    if (nim.slice(0, 6) !== "121705") {
      setLoading(true);
      return;
    }

    setNim(nim);
    setLoading(false);
  }

  function handleSaranMasukan(e) {
    setSaranMasukan(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const err = await submitPresence(name, nim, saranMasukan, params.id);

    if (!err) {
      setThank(true);
      return;
    }

    console.log(err);
  }

  function bodyForm() {
    return (
      <div className="card-body">
        <div className="text-justify mb-4">
          <p className="card-text">{data.description}</p>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="mb-0">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Masukan Nama"
              onChange={handleName}
              required
            />
          </div>
          <div className="form-group">
            <label className="mb-0">NIM</label>
            <small id="nim" className="form-text text-muted mt-0 mb-2">
              <span className="text-danger">*</span> Contoh: 121705xxxx
            </small>
            <input
              type="text"
              className="form-control"
              id="nim"
              placeholder="Masukan NIM"
              minLength={10}
              maxLength={10}
              onChange={handleNim}
              required
            />
          </div>
          <div className="form-group">
            <label>Saran dan Masukan</label>
            <textarea
              className="form-control"
              id="saran"
              placeholder="Saran dan Masukan"
              rows={4}
              onChange={handleSaranMasukan}
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={loading}
            >
              Submit Kehadiran
            </button>
          </div>
        </form>
      </div>
    );
  }

  function bodyThank() {
    return (
      <div className="card-body text-center">
        <h4>Terima kasih telah melakukan presensi.</h4>
        <p>Semoga harimu menyenangkan...</p>
      </div>
    );
  }

  return !data ? (
    <></>
  ) : (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center py-4 px-2">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div
              className="card"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="card-header">
                <Image
                  src={"/dimensiweb.png"}
                  alt="Dimensi Web"
                  width={71}
                  height={78}
                  style={{ float: "left" }}
                  className="mr-4"
                />
                <div className="d-inline pt-2" style={{ float: "left" }}>
                  <h3>{data.name}</h3>
                  <h6 className="text-muted">
                    {formatDateTimeRange(data.start_date, data.end_date)}
                  </h6>
                </div>
              </div>
              {thank ? bodyThank() : bodyForm()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
