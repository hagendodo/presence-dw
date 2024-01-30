"use client";

import { addActivity } from "@/app/supabase";
import { useState } from "react";

export default function AddActivityModal() {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [today, setToday] = useState(new Date().toISOString().split("T")[0]);

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeStart(e) {
    setStart(e.target.value);
  }

  function onChangeEnd(e) {
    setEnd(e.target.value);
  }

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const err = await addActivity({
      name: name,
      start: start,
      end: end,
      description: description,
    });

    if (!err) {
      window.location.reload();
      return;
    }

    console.log(err);
  }
  return (
    <div
      className="modal fade"
      id="addActivityModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Activity
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="activityName">Name Activity</label>
                <input
                  type="text"
                  className="form-control"
                  id="activityName"
                  placeholder="Enter activity name"
                  onChange={onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="activityStart">Start</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="activityStart"
                  onChange={onChangeStart}
                  min={today}
                />
              </div>
              <div className="form-group">
                <label htmlFor="activityEnd">End</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="activityEnd"
                  onChange={onChangeEnd}
                  min={today}
                />
              </div>
              <div className="form-group">
                <label htmlFor="activityDescription">Description</label>
                <textarea
                  className="form-control"
                  id="activityDescription"
                  rows="3"
                  placeholder="Enter activity description"
                  onChange={onChangeDescription}
                ></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
