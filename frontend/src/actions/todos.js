import axios from "axios";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, GET_TODO_LIST } from "./types";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const getTodos = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/todo/")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_TODO_LIST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteTodo = (id) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/todo/${id}/`)
    .then((res) => {
      dispatch({ type: DELETE_TODO, payload: id });
    })
    .catch((err) => console.log(err));
};

export const toggleTodo = (todo) => (dispatch) => {
  todo.done = !todo.done;
  axios
    .put(`http://127.0.0.1:8000/api/todo/${todo.id}/`, todo)
    .then((res) => {
      dispatch({ type: TOGGLE_TODO, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const addTodo = (todo) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/todo/", todo)
    .then((res) => {
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
