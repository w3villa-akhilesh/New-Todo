import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState(null);

  // Function for getting all Tasks associated with User
  const getTasks = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/getTask", {
        headers: { token },
      });
      if (data.success) {
        setTodos(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function for Adding New Task
  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/addTask",
        { task },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        await getTasks();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Function for Completing Task
  const handleComplete = async (id) => {
    try {
      const { data } = await axios.put(
        backendUrl + "/completeTask",
        { id },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        await getTasks();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Function for Deleting Task
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.put(
        backendUrl + "/deleteTask",
        { id },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        await getTasks();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const value = {
    backendUrl,
    handleAdd,
    handleComplete,
    handleDelete,
    getTasks,
    setTask,
    todos,
    token,
    setToken,
  };

  useEffect(() => {
    if (token) {
      getTasks();
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;