import React, { useState } from "react";

import uuid from "react-uuid";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "테스트 제목1",
      contents: "테스트 내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "테스트 제목2",
      contents: "테스트 내용2",
      isDone: false,
    },
    {
      id: uuid(),
      title: "테스트 제목3",
      contents: "테스트 내용3",
      isDone: true,
    },
    {
      id: uuid(),
      title: "테스트 제목4",
      contents: "테스트 내용4",
      isDone: false,
    },
  ]);

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
        <InputForm todos={todos} setTodos={setTodos} />
        <div>
          {/* TODO: list 영역 컴포넌트 나누기 */}
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
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
