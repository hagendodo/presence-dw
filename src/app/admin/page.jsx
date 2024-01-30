"use client";
import NavbarComponent from "@/components/NavbarComponent";

export default function page() {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid">
        <div className="row py-4 px-2">
          <div className="col-12">
            <div className="row">
              <div className="col-12 mt-4">
                <div
                  className="card"
                  style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="card-header pb-1">
                    <h5>Dashboard</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      Welcome, this is dashboard for administrator of Dimensi
                      Web.
                    </p>
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
