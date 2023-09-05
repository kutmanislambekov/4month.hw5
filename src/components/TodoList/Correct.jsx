import { useState } from "react";

const Correct = ({ data, setData, setKey, item }) => {
  const [text, setText] = useState(item.text);
  const saveTodo = (id) => {
    if (text.trim().length > 0) {
      setData(
        data.map(item => {
          if (item.id == id) {
            return {
              ...item,
              text: text.trim(),
              correct: false,
            };
          } else {
            return item;
          }
        })
      );
    }
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          saveTodo(item.id);
        }}
      >
        save
      </button>
      <button
        onClick={() => {
          setKey("correct", item.id);
        }}
      >
        cancel
      </button>
    </div>
  );
};

export default Correct;
