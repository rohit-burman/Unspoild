import React, { useEffect } from "react";

const Item = ({ name, date, tag, id, handleDelete }) => {
  useEffect(() => {
    const curdate = new Date().toISOString();

    if (curdate.slice(0, 10) === date) {
      Notification.requestPermission().then((perm) => {
        if (perm === "granted") {
          new Notification(`Item: ${name}`, {
            body: "It expires today! Throw it away, or it will throw you away :)",
          });
        }
      });
    }
  }, []);

  const handle = () => {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        new Notification(`Item: ${name}`, {
          body: "It expires today! Throw it away, or it will throw you away :)",
        });
      }
    });
  };

  return (
    <>
      <div className="item">
        <div className="item-details">
          <div className="item-name">{name}</div>
          <div className="item-type">{tag}</div>
          <div className="date">
            <p className="date-head">Expires on</p>
            <p>{date}</p>
            {/* <button onClick={handle}>Click</button> */}
          </div>
        </div>
        <button onClick={() => handleDelete(id)} className="delete">
          <i className="fa-regular fa-circle-xmark cross"></i>
        </button>
      </div>
    </>
  );
};

export default Item;
