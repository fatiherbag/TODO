import React, { createContext } from "react";
import useTodosData from "../hooks/useTodosData";

export const TodoDataContext = createContext({
  todoList: [],
  createTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  loadingStatus: "",
});

export const TodoDataProvider = ({ children }) => {
  const {
    todoList,
    createTodo,
    updateTodo,
    deleteTodo,
    loadingStatus,
    isPending,
    reFetch,
  } = useTodosData();

  const value = {
    todoList,
    createTodo,
    updateTodo,
    deleteTodo,
    loadingStatus,
    isPending,
    reFetch,
  };

  return (
    <TodoDataContext.Provider value={value}>
      {children}
    </TodoDataContext.Provider>
  );
};
