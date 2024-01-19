import React, { useState } from "react";
import { db as db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Filters = () => {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [tag, settag] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docref = await addDoc(collection(db, "items"), { name, date, tag });

    setname("");
    setdate("");
    settag("");
  };
  return (
    <>
      <div className="filters">
        <div className="tabs">
          <div className="filter">All</div>
          <div className="filter">Med</div>
          <div className="filter">Food</div>
        </div>

        <button data-bs-toggle="modal" data-bs-target="#create" className="newButton">
          <div className="new filter">
            <i className="fa-solid fa-plus"></i> <span>New</span>
          </div>
        </button>
      </div>

      <div className="modal" id="create" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add An Item</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <label htmlFor="name">Item</label>
                  <input
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="input">
                  <label htmlFor="date">Expiry Date</label>
                  <input
                    onChange={(e) => setdate(e.target.value)}
                    value={date}
                    type="date"
                    name="date"
                    id="date"
                  />
                </div>
                <div className="input">
                  <label htmlFor="tag">Tag</label>
                  <input
                    onChange={(e) => settag(e.target.value)}
                    value={tag}
                    type="text"
                    name="tag"
                    id="tag"
                  />
                </div>
                <div className="btns">
                  <button type="submit" className="btn add">
                    Add Item
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
