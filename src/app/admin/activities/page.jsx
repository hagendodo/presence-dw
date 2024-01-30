"use client";
import { checkSession, getAllActivity } from "@/app/supabase";
import ActivityComponent from "@/components/ActivityComponent";
import AddActivityModal from "@/components/AddActivityModal";
import NavbarComponent from "@/components/NavbarComponent";
import { useState } from "react";
import { useEffect } from "react";

export default function Dashboard() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getAllActivity().then(({ data, error }) => {
      if (error) {
        console.log(error);
        return;
      }
      setDatas(data);
    });
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="container-fluid">
        <div className="row py-4 px-2">
          <div className="col-12">
            <div className="row">
              <div className="col-12 mb-4">
                <h3 style={{ float: "left" }}>Activities Dimensi Web</h3>
                <div className="d-inline" style={{ float: "right" }}>
                  <button
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#addActivityModal"
                  >
                    Add Activity
                  </button>
                </div>
              </div>
              {datas.map((data, index) => (
                <ActivityComponent key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <AddActivityModal />
    </>
  );
}
