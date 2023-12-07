import React, { useEffect } from "react";
import Item from "./Item";

const Items = () => {
  useEffect(() => {
    const fetchData = () => {
      const items = JSON.parse(window.localStorage.getItem("items"));
      return items;
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="items">
        {items.map((item) => {
          return <Item name={item.name} date={item.date} tag={item.tag} />;
        })}
      </div>
    </>
  );
};

export default Items;
