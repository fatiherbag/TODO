import React from "react";
import Task from "./Task";

export default function TaskList({
  display,
  important,
  handleDelete,
  handleEdit,
  markDone,
  searchText,
  todoList,
  updateId,
}) {
  return (
    <div className="tasks">
      {todoList
        .filter((todo) => {
          if (display === "all") {
            return true;
          } else if (display === "pending") {
            return todo.done === false;
          } else if (display === "done") {
            return todo.done === true;
          } else {
            return false; // should not be needed
          }
        })
        .filter((todo) => {
          if (important === true) {
            return todo.important === true;
          } else {
            return true;
          }
        })
        .filter((todo) => {
          if (searchText?.length > 0) {
            return todo.todoText
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase());
          } else {
            return true;
          }
        })
        .map((todo) => {
          return (
            <Task
              key={todo.id}
              todo={todo}
              markDone={markDone}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              updateId={updateId}
            />
          );
        })}
    </div>
  );
}
