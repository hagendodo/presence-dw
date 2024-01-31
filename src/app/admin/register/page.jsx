"use client";

import { register } from "@/app/supabase";
import NavbarComponent from "@/components/NavbarComponent";
import { useState } from "react";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { data, err } = await register(email, password);

    if (!err) {
      setLoading(false);
      alert(
        "Registrasi Pengurus Berhasil, Silahkan cek email terkait untuk verifikasi akun."
      );
      return;
    }

    console.log(err);
  }

  return (
    <>
      <NavbarComponent />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center p-4">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div
              className="card"
              style={{ "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="card-header">
                <h6>Registrasi Pengurus</h6>
              </div>
              <div className="card-body">
                <form method="POST" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="mb-0">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Masukan Email"
                      onChange={handleEmail}
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Masukan Password"
                      onChange={handlePassword}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn btn-success w-100"
                      disabled={loading}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
