import React, { useContext, useState } from "react";
import AddNewTask from "./AddNewTask";
import { TodoDataContext } from "../../contexts/DataContexts";
import TaskEditForm from "./TaskEditForm";
import TaskList from "./TaskList";

export default function Manager({ display, important, searchText, darkTheme }) {
  const { todoList, updateTodo, createTodo, deleteTodo } =
    useContext(TodoDataContext);

  const [toDoTask, setToDoTask] = useState({
    todoText: "",
    done: false,
    important: false,
  });

  const [addOrEdit, setAddOrEdit] = useState("add");
  const [updateId, setUpdateId] = useState(0);

  const handleEdit = (todoItem) => {
    setAddOrEdit("edit");
    setToDoTask(todoItem);
  };

  const add = (text) => {
    createTodo({
      todoText: text,
      done: false,
      important: false,
    });
  };

  const markDone = (id) => {
    const task = todoList.find((task) => task.id === id);
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    setUpdateId(task.id);
    updateTodo(updatedTask, () => {
      setUpdateId(0);
    });
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleUpdate = () => {
    setUpdateId(toDoTask.id);
    setAddOrEdit("add");
    updateTodo(toDoTask, () => setUpdateId(0));
  };

  if (!todoList) {
    return <div className="loading-state-canvas">Loading...</div>;
  }

  return (
    <>
      <div className="form">
        <AddNewTask
          visible={addOrEdit === "add"}
          add={add}
          darkTheme={darkTheme}
        />
        <TaskEditForm
          visible={addOrEdit === "edit"}
          todoTask={toDoTask}
          setToDoTask={setToDoTask}
          update={handleUpdate}
          setAddOrEdit={setAddOrEdit}
        />
      </div>
      <TaskList
        display={display}
        important={important}
        searchText={searchText}
        todoList={todoList}
        markDone={markDone}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        updateId={updateId}
        darkTheme={darkTheme}
      />
    </>
  );
}
