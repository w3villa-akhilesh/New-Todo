import React from "react";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

const Create = () => {
  const { handleAdd, setTask } = useContext(AppContext);

  return (
    <form onSubmit={handleAdd} className="flex gap-3 my-10">
      <input
        onChange={(e) => setTask(e.target.value)}
        className="border-2 border-black rounded-lg px-8 py-2 md:px-40 outline-indigo-700"
        type="text"
        placeholder="Enter task"
        required
      />
      <button
        className="cursor-pointer bg-indigo-700 px-6 py-2 rounded-lg text-white"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default Create;
