import React, { useState } from "react";

const Filters = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const date = e.target.date.value;
    const tag = e.target.tag.value;

    // setItems([...items, { name, date, tag }]);

    const items_old = localStorage.getItem("items");
    if (items_old) {
      setItems([...items_old, { name, date, tag }]);
    } else {
      setItems([{ name, date, tag }]);
    }

    localStorage.setItem("items", JSON.stringify(items));
  };

  return (
    <>
      <div className="filters">
        <div className="tabs">
          <div className="filter">All</div>
          <div className="filter">Med</div>
          <div className="filter">Food</div>
        </div>

        <button data-bs-toggle="modal" data-bs-target="#create">
          <div className="new filter">
            <i className="fa-solid fa-plus"></i> <span>New</span>
          </div>
        </button>
      </div>

      <div class="modal" id="create" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add An Item</h5>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <label htmlFor="name">Item</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="input">
                  <label htmlFor="date">Expiry Date</label>
                  <input type="text" name="date" id="date" />
                </div>
                <div className="input">
                  <label htmlFor="tag">Tag</label>
                  <input type="text" name="tag" id="tag" />
                </div>
                <div className="btns">
                  <button type="submit" class="btn add">
                    Add Item
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
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
