import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    newTodo: {
      id: todo.id,
      title: todo.title,
      contents: todo.contents,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleStatusTodo = (id, isDone) => {
  return {
    type: TOGGLE_STATUS_TODO,
    id,
    isDone,
  };
};

const initialState = [
  {
    id: uuid(),
    title: "리액트 강의보기",
    contents: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: uuid(),
    title: "점심 먹기",
    contents: "점심 뭐먹지..?",
    isDone: false,
  },
];

// Reducer 기본형태
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.newTodo];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_STATUS_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todos;

// 안녕히 계세요..
