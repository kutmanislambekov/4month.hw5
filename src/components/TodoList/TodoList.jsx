import Btn from "./Btn";
import Correct from "./Correct";

const btns = [
  {
    id: 1,
    name: "all",
  },
  {
    id: 2,
    name: "active",
  },
  {
    id: 3,
    name: "completed",
  },
  {
    id: 4,
    name: "cart",
  },
];

const TodoList = ({ list, setKey, setStatus, status, data, setData }) => {
  return (
    <div className="todo-list">
      <div className="todo-list-filter">
        {btns.map((item) => {
          return (
            <button
              className={status === item.name ? "todo-list-filter-active" : ""}
              onClick={() => {
                setStatus(item.name);
              }}
              key={item.id}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      {list.map((item) => {
        return (
          <div key={item.id} className="todo-list-item">
            {item.correct ? (
              <Correct
                item={item}
                data={data}
                setData={setData}
                setKey={setKey}
              />
            ) : (
              <>
                <p>{item.text}</p>
                <Btn
                  item={item}
                  setKey={setKey}
                  status={status}
                  data={data}
                  setData={setData}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;