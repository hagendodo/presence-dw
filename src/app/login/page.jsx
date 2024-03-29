"use client";
import "../globals.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClientComponentClient();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // const { data, err } = await login(email, password);

    // if (!err) {
    //   //console.log(await checkSession());
    //   setLoading(false);
    //   //window.location.href = "/admin";
    //   return;
    // }

    const { data, err } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!err) {
      window.location.href = "/admin";
      return;
    }

    if (data.user === null) {
      alert("Email atau Password Salah");
      return;
    }

    console.error(err);
  }

  return (
    <div className="bg-all" style={{ minHeight: "100vh" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Presensi Dimensi Web
        </a>

        <div className="ml-auto d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="text-white btn btn-secondary" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center p-4">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div
              className="card"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="card-header text-center">
                <h3>Dimensi Web</h3>
                <h6>Login Pengurus</h6>
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
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
