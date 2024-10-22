import { createSlice } from "@reduxjs/toolkit";
import { ToDo } from "../../types/types";

const initialState: { todos: ToDo[]; form: ToDo } = {
  todos: [],
  form: {
    id: null,
    text: "",
    completed: false,
  },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    pushTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      } as ToDo;
      state.todos.push(newTodo);
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setToDo: (state, action) => {
      if (action.payload) {
        state.form = action.payload;
      }
    },
    editToDo: (state, action) => {
      const { id, text } = action.payload;
      if (id) {
        const existingTodo = state.todos.find((todo) => todo.id === id);
        if (existingTodo) {
          existingTodo.text = text;
        }
      }
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
  },
});
export const {
  pushTodo,
  toggleTodoStatus,
  deleteTodo,
  setToDo,
  editToDo,
  resetForm,
} = todoSlice.actions;
export default todoSlice.reducer;
