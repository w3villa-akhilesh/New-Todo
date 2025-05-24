import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";
import taskModel from "../Models/taskModel.js";

//API to Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    //Validate E-mail Format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Enter a valid Emai",
      });
    }

    //Validate Password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Enter a Strong Password",
      });
    }

    //Hashing User Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User doesnot exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.json({
        success: true,
        token,
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for Getting all Tasks related with User
const getTask = async (req, res) => {
  try {
    const tasks = await taskModel.find({ userId: req.body.userId });
    return res.json({ success: true, data: tasks });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Some Error Occured" });
  }
};

// API for Adding New Task
const addTask = async (req, res) => {
  try {
    const newTask = new taskModel({
      userId: req.body.userId,
      task: req.body.task,
    });
    await newTask.save();
    return res.json({ success: true, message: "Task Added" });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for Deleting Task
const deleteTask = async (req, res) => {
  try {
    await taskModel.findByIdAndDelete(req.body.id);
    return res.json({ success: true, message: "Task Removed" });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for Editing Task
const editTask = async (req, res) => {
  try {
    await taskModel.findByIdAndUpdate(
      { _id: req.body.id },
      { task: req.body.newTask }
    );
    return res.json({ success: true, message: "Task Edited" });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for Completing Task
const completeTask = async (req, res) => {
  try {
    await taskModel.findByIdAndUpdate({ _id: req.body.id }, { status: true });
    return res.json({ success: true, message: "Task Completed" });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  registerUser,
  loginUser,
  completeTask,
  addTask,
  deleteTask,
  getTask,
  editTask,
};