import React from "react";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const TaskDisplay = ({ todo }) => {
  const { handleComplete, handleDelete, backendUrl, token, getTasks } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [newTask, setNewTask] = useState();

  // Function for Editing Task
  const handleEdit = async (id) => {
    try {
      const { data } = await axios.put(
        backendUrl + "/editTask",
        { id, newTask },
        { headers: { token } }
      );

      if (data.success) {
        await getTasks();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-wrap justify-between max-sm:gap-1 sm:grid sm:grid-cols-[5fr_1fr_0.2fr] items-center py-3 px-6 border-b-2 border-blue-800 bg-gray-50">
      {isEdit ? (
        <div className="flex gap-2">
          <input
            className="border border-black rounded-lg px-2 py-1 outline-indigo-700"
            type="text"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={() => {
              setIsEdit(false);
              handleEdit(todo._id);
            }}
            className="px-4 rounded-2xl border border-indigo-800 bg-blue-100 cursor-pointer text-indigo-700 text-xs font-medium"
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap max-sm:gap-5 sm:grid sm:grid-cols-[7fr_3fr] ">
          <p
            className={
              todo.status
                ? "line-through text-xl text-zinc-600"
                : "text-xl text-black"
            }
          >
            {todo.task}
          </p>
          <img
            onClick={() => setIsEdit(true)}
            className="h-7 cursor-pointer"
            src="https://cdn-icons-png.freepik.com/256/13025/13025707.png?ga=GA1.1.2098632587.1739258382&semt=ais_hybrid"
            alt="Edit Icon"
          />
        </div>
      )}
      <img
        onClick={() => handleDelete(todo._id)}
        className="h-6 cursor-pointer"
        src="https://cdn-icons-png.freepik.com/256/6861/6861362.png?ga=GA1.1.581657608.1739173084&semt=ais_hybrid"
        alt="Delete Icon"
      />
      <img
        onClick={() => handleComplete(todo._id)}
        className={
          todo.status
            ? "hidden"
            : "h-6 cursor-pointer"
        }
        src="https://cdn-icons-png.freepik.com/256/5610/5610944.png?ga=GA1.1.581657608.1739173084&semt=ais_hybrid"
        alt="Complete Icon"
      />
    </div>
  );
};

export default TaskDisplay;