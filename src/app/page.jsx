"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getNearestActivity } from "./supabase";

export default function page() {
  const [title1, setTitle1] = useState("");
  const [time1, setTime1] = useState("");
  const [title2, setTitle2] = useState("");
  const [time2, setTime2] = useState("");
  const [title3, setTitle3] = useState("");
  const [time3, setTime3] = useState("");

  function countdown1(date) {
    let countDownDate = new Date(date).getTime();

    let x = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime1(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime1("Tidak ada acara Terdekat");
      }
    }, 1000);
  }

  function countdown2(date) {
    let countDownDate = new Date(date).getTime();

    let x = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime2(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime2("Tidak ada acara Terdekat");
      }
    }, 1000);
  }

  function countdown3(date) {
    let countDownDate = new Date(date).getTime();

    let x = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime3(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime3("Tidak ada acara Terdekat");
      }
    }, 1000);
  }

  useEffect(() => {
    getNearestActivity().then((data) => {
      const activities = data.data;

      let isEmpty = true;

      if (activities[0]) {
        countdown1(activities[0].start_date);
        setTitle1(activities[0].name);
        isEmpty = false;
      }

      if (activities[1]) {
        countdown2(activities[1].start_date);
        setTitle2(activities[1].name);
        isEmpty = false;
      }

      if (activities[2]) {
        countdown3(activities[2].start_date);
        setTitle3(activities[2].name);
        isEmpty = false;
      }

      if (isEmpty) {
        setTitle1("Belum ada acara terdekat nih.");
        setTime1("Mohon ditunggu yaa...");
      }
    });
  }, []);

  return (
    <div style={{ maxHeight: "100vh" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <h4 className="text-white mx-auto">Acara Terdekat Dimensi Web</h4>
        </div>
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
              <a className="btn btn-light" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div
          className="row align-items-around"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <div className="col-12 text-white text-center">
            <h4>{title1}</h4>
            <h2>{time1}</h2>
          </div>
          <div className="col-12 text-white text-center">
            <h4>{title2}</h4>
            <h2>{time2}</h2>
          </div>
          <div className="col-12 text-white text-center">
            <h4>{title3}</h4>
            <h2>{time3}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
