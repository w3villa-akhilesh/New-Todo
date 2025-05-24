import React from "react";
import Create from "./Create";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import TaskDisplay from "./TaskDisplay";

const Task = () => {
  const { todos } = useContext(AppContext);
  return (
    <div>
      <h2 className="text-3xl">To Do List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2 className="text-2xl text-red-500">No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="mx-1 my-5">
            <TaskDisplay todo={todo} />
          </div>
        ))
      )}
    </div>
  );
};

export default Task;
