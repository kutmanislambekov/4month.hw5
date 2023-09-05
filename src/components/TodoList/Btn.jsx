import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleMinus, faCalendarCheck, faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

const Btn = ({ item, setKey, status, data, setData }) => {
  const deleteCart = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  return (
    <div className="todo-list-item-btns">
      {status === "cart" ? (
        <>
          <button
            onClick={() => {
              setKey("deleted", item.id);
            }}
          >
            restore
          </button>
          <button
            onClick={() => {
              deleteCart(item.id);
            }}
          >
            delete
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setKey("correct", item.id);
            }}
          >
            <FontAwesomeIcon className="icon"
              icon={faPenToSquare} bounce

            />
            correct
          </button>
          <button
            onClick={() => {
              setKey("completed", item.id);
            }}
          >
            <FontAwesomeIcon className="icon" icon={faCalendarCheck} bounce/>
            complete{item.completed ? "+" : ""}
          </button>
          <button
            onClick={() => {
              setKey("deleted", item.id);
            }}
          >
            <FontAwesomeIcon icon={faPersonCircleMinus} bounce />
            delete
          </button>
        </>
      )}
    </div>
  );
};

export default Btn;
