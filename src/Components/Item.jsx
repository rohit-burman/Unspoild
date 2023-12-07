import React from "react";

const Item = ({ name, date, tag }) => {
  return (
    <>
      <div className="item">
        <div className="item-details">
          <div className="item-name">{name}</div>
          <div className="date">
            <p className="date-head">Expires on</p>
            <p>{date}</p>
          </div>
        </div>
        <div className="delete">
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
      </div>
    </>
  );
};

export default Item;
