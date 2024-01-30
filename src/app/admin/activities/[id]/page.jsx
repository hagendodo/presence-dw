"use client";
import {
  deleteActivity,
  getActivityById,
  getPresenceByActivityId,
} from "@/app/supabase";
import NavbarComponent from "@/components/NavbarComponent";
import RowPresenceComponent from "@/components/RowPresenceComponent";
import {
  copyToClipboard,
  formatDateTimeRange,
  shareToWhatsApp,
} from "@/services/helper";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function page({ params }) {
  const [data, setData] = useState(null);
  const [presences, setPresences] = useState([]);

  useEffect(() => {
    getActivityById(params.id).then(({ data, error }) => {
      if (error) {
        console.log(error);
        return;
      }
      setData(data[0]);
    });
  }, []);

  useEffect(() => {
    getPresenceByActivityId(params.id).then(({ data, error }) => {
      if (error) {
        console.log(error);
        return;
      }
      setPresences(data);
    });
  }, []);

  function handleDeleteClick() {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this activity?"
    );

    if (isConfirmed) {
      deleteActivity(params.id).then(({ error }) => {
        if (error) {
          console.error(error);
          return;
        }

        window.location.href = "/admin/activities";
      });
    }
  }

  return !data ? (
    <></>
  ) : (
    <>
      <NavbarComponent />
      <div className="container-fluid">
        <div className="row py-4 px-2">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <div
                  className="card"
                  style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="card-header text-right py-2">
                    <Link
                      className="btn btn-success"
                      style={{ float: "left" }}
                      href={"/admin/activities"}
                    >
                      Back
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        copyToClipboard(params.id);
                      }}
                      className="btn btn-secondary"
                    >
                      Copy Link
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        shareToWhatsApp(params.id);
                      }}
                      className="btn btn-primary ml-2"
                    >
                      Share
                    </button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-2">{data.name}</h5>
                    <small className="text-muted">
                      {formatDateTimeRange(data.start_date, data.end_date)}
                    </small>
                    <p className="card-text mt-2">{data.description}</p>
                  </div>
                  <div className="card-footer text-right">
                    <button
                      type="button"
                      className="btn btn-danger ml-4"
                      onClick={handleDeleteClick}
                    >
                      Delete This Activity
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div
                  className="card"
                  style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="card-header pb-1">
                    <h5>Data Presensi</h5>
                  </div>
                  <div className="card-body">
                    <table className="table table-striped table-bordered">
                      <thead className="thead-dark">
                        <tr className="text-center">
                          <th scope="col">#</th>
                          <th scope="col">NIM</th>
                          <th scope="col">Nama</th>
                          <th scope="col">Saran dan Masukan</th>
                          <th scope="col">Waktu Kehadiran</th>
                        </tr>
                      </thead>
                      <tbody>
                        {presences.map((data, index) => (
                          <RowPresenceComponent
                            data={data}
                            key={index}
                            index={index + 1}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
