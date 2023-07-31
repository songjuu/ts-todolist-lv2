import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import { RootState } from "../redux/config/configStore";

//interface or type 선언
type TodoListProps = {
  listIsDone: boolean;
};

// 할 일 목록, 완료 목록 기능 구현
function TodoList({ listIsDone }: TodoListProps) {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  //삭제버튼
  const deleteHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const id = (e.target as HTMLElement).getAttribute("data-key");
    dispatch(deleteTodo(id as string));
  };

  //상태버튼
  const toggleStatusHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const statusId = (e.target as HTMLElement).getAttribute("data-key");
    const isDone = listIsDone;
    dispatch(toggleStatusTodo(statusId as string, isDone));
  };

  return (
    <div>
      <h2>{listIsDone ? "완료 목록" : "할 일 목록"}</h2>
      {todos
        .filter((todo) => {
          return todo.isDone === listIsDone;
        })
        .map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                paddingLeft: "10px",
              }}
            >
              <p>
                <Link to={`/detail/${todo.id}`}>상세페이지</Link>
              </p>
              <p>ID: {todo.id}</p>
              <h3>{todo.title}</h3>
              <p>{todo.contents}</p>
              <p>완료여부: {todo.isDone.toString()}</p>
              <div
                style={{
                  paddingBottom: "10px",
                }}
              >
                <button onClick={toggleStatusHandler} data-key={todo.id}>
                  {listIsDone ? "취소" : "완료"}
                </button>
                <button onClick={(e) => deleteHandler(e)} data-key={todo.id}>
                  삭제
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
