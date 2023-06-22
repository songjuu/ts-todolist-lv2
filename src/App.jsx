import React, { useState } from "react";

import uuid from "react-uuid";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: uuid(),
  //     title: "공부",
  //     contents: "자바스크립트 공부하기",
  //     isDone: false,
  //   },
  //   {
  //     id: uuid(),
  //     title: "공부",
  //     contents: "redux 강의 복습하기",
  //     isDone: false,
  //   },
  //   {
  //     id: uuid(),
  //     title: "취미",
  //     contents: "수영가기",
  //     isDone: true,
  //   },
  //   {
  //     id: uuid(),
  //     title: "일상",
  //     contents: "친구 만나기",
  //     isDone: false,
  //   },
  // ]);

  return (
    <div>
      <header
        style={{
          backgroundColor: "#d1ffdd",
          padding: "10px",
        }}
      >
        My TodoList
      </header>
      <main
        style={{
          backgroundColor: "#feffd6",
          padding: "10px",
        }}
      >
        <InputForm />
        <div>
          <TodoList listIsDone={false} />
          <TodoList listIsDone={true} />
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#fae6ff",
          padding: "10px",
        }}
      >
        <p>Copyright 2023. JeongSongJu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
