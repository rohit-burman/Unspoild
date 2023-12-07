import React, { useEffect, useState } from "react";
import Item from "./Item";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

const Items = () => {
  const [items, setitems] = useState([]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemArr = [];
      querySnapshot.forEach((doc) => {
        itemArr.push({ ...doc.data(), id: doc.id });
      });
      setitems(itemArr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="items">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              date={item.date}
              tag={item.tag}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Items;
