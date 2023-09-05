import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const Cleaner = ({ data, setData }) => {
  const cleanerfunc = () => {
    const newData = data.filter((item) => !item.deleted);
    setData(newData);

    const newLocalStorageData = JSON.parse(
      localStorage.getItem("todo-list")
    ).filter((item) => !item.deleted);
    localStorage.setItem("todo-list", JSON.stringify(newLocalStorageData));
  };

  return (
    <button className="additionalBtn" onClick={cleanerfunc}>
      {" "}
      <FontAwesomeIcon className="icon" icon={faTrashCan} style={{ color: "red" }} />
      Clear Cart
    </button>
  );
};

export default Cleaner;