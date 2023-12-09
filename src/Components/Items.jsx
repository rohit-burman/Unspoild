import React, { useEffect, useState } from "react";
import Item from "./Item";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";

const Items = () => {
  const [items, setitems] = useState([]);
  const [changed, setchanged] = useState([]);
  const [search, setsearch] = useState("");
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [tag, settag] = useState("food");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docref = await addDoc(collection(db, "items"), { name, date, tag });

    setname("");
    setdate("");
    settag("food");
  };

  const handleMed = () => {
    let newArr = items.filter((item) => {
      return item.tag.toLowerCase().includes("med");
    });
    setchanged(newArr);
  };

  const handleFood = () => {
    let newArr = items.filter((item) => {
      return item.tag.toLowerCase().includes("food");
    });
    setchanged(newArr);
  };

  const handleCosmetics = () => {
    let newArr = items.filter((item) => {
      return item.tag.toLowerCase().includes("cosmetics");
    });
    setchanged(newArr);
  };

  const handleAll = () => {
    setchanged(items);
  };

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
      setchanged(itemArr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="header">
        <div className="searches">
          <form className="search">
            <input
              type="text"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              name="srch"
              id="srch"
              placeholder="Search ..."
            />
          </form>

          <button data-bs-toggle="modal" data-bs-target="#create">
            <div className="add">
              <i className="fa-solid fa-plus"></i> <span>New</span>
            </div>
          </button>
        </div>

        <div className="filters">
          <div onClick={handleAll} className="filter">
            All
          </div>
          <div onClick={handleMed} className="filter">
            Medicine
          </div>
          <div onClick={handleFood} className="filter">
            Food
          </div>
          <div onClick={handleCosmetics} className="filter">
            Cosmetics
          </div>
        </div>

        <motion.div layout className="items">
          {changed
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item) => {
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
        </motion.div>
      </div>

      <div className="modal" id="create" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add An Item</h4>
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
                  <select
                    className="text-center"
                    name="tag"
                    id="tag"
                    value={tag}
                    onChange={(e) => settag(e.target.value)}
                  >
                    <option value="food">Food</option>
                    <option value="med">Medicine</option>
                    <option value="cosmetics">Cosmetics</option>
                  </select>
                </div>
                <div className="btns">
                  <button type="submit" className="btn btn-success">
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

export default Items;
