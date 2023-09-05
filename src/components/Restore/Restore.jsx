import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

const Restore = ({ data, setData }) => {
  const restoreCartItems = () => {
    const newData = data.map((item) => {
      if (item.deleted) {
        return { ...item, deleted: false };
      }
      return item;
    });

    setData(newData);

    localStorage.setItem("todo-list", JSON.stringify(newData));
  };

  return (
    <button className="additionalBtn" onClick={restoreCartItems}>
      <FontAwesomeIcon className="icon" icon={faArrowRotateLeft} style={{ color: "green" }} />
      Restore Cart Items
    </button>
  );
};

export default Restore;