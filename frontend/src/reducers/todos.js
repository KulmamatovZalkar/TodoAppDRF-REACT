import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  GET_TODO_LIST,
} from "../actions/types";

const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: [...state.todos],
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
}
