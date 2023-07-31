import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO" as const;
const DELETE_TODO = "DELETE_TODO" as const;
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO" as const;

interface TodoType {
  id: string;
  title: string;
  contents: string;
  isDone?: boolean;
}

export const addTodo = (todo: TodoType) => {
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

export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleStatusTodo = (id: string, isDone: boolean) => {
  return {
    type: TOGGLE_STATUS_TODO,
    id,
    isDone,
  };
};

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toggleStatusTodo>;

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

// Reducer
const todos = (state = initialState, action: TodosAction) => {
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
