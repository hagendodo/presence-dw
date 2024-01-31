"use client";

import { useState } from "react";

export default function FormLoginComponent({ submit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    submit(email, password);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/admin">
          Presensi Dimensi Web
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="/">
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
    </>
  );
}
