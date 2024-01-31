"use client";
import { checkSession, getAllMember } from "@/app/supabase";
import NavbarComponent from "@/components/NavbarComponent";
import RowMemberComponent from "@/components/RowMemberComponent";
import { useEffect, useState } from "react";

export default function page({ params }) {
  checkSession().then((session) => {
    if (!session) {
      window.location.href = "/login";
      return;
    }
  });
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getAllMember(0, 4).then(({ data, error }) => {
      if (error) {
        console.log(error);
        return;
      }
      setMembers(data);
    });
  }, []);

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
                    <h5>Data Members</h5>
                  </div>
                  <div className="card-body">
                    <table className="table table-striped table-bordered">
                      <thead className="thead-dark">
                        <tr className="text-center">
                          <th scope="col">#</th>
                          <th scope="col">NIM</th>
                          <th scope="col">Nowa</th>
                          <th scope="col">Nama</th>
                          <th scope="col">Bidang</th>
                          <th scope="col">Harapan</th>
                          <th scope="col">Waktu Pendaftaran</th>
                        </tr>
                      </thead>
                      <tbody>
                        {members.map((data, index) => (
                          <RowMemberComponent
                            data={data}
                            key={index}
                            index={index + 1}
                          />
                        ))}
                      </tbody>
                    </table>
                    <nav className="d-flex justify-content-end">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex="-1">
                            Previous
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2 <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
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
