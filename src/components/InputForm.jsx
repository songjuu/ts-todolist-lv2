import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

// input 기능 구현
function InputForm({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
          setTitle("");
          setContents("");
        }}
      >
        <input
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="내용을 입력하세요."
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
        <button
          style={{
            cursor: "pointer",
          }}
        >
          입력
        </button>
      </form>
    </div>
  );
}

export default InputForm;
