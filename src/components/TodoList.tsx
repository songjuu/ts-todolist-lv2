import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import { RootState } from "../redux/config/configStore";

// 할 일 목록, 완료 목록 기능 구현
function TodoList({ listIsDone }: { listIsDone: boolean }) {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  //삭제버튼
  const deleteHandler = (id: string): void => {
    dispatch(deleteTodo(id));
  };

  //상태버튼
  const toggleStatusHandler = (id: string): void => {
    const statusId = id;
    const isDone = listIsDone;
    dispatch(toggleStatusTodo(statusId, isDone));
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
                <button onClick={() => toggleStatusHandler(todo.id)}>
                  {listIsDone ? "취소" : "완료"}
                </button>
                <button onClick={() => deleteHandler(todo.id)}>삭제</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
