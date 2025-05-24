import express from 'express';
import { registerUser, loginUser, addTask, getTask, completeTask, deleteTask, editTask } from '../Controllers/userController.js';
import authMiddleware from '../Middlewares/auth.js';

const userRouter = express.Router()

userRouter.post('/signup',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/addTask', authMiddleware, addTask);
userRouter.get('/getTask', authMiddleware, getTask);
userRouter.put('/deleteTask', authMiddleware, deleteTask);
userRouter.put('/editTask', authMiddleware, editTask);
userRouter.put('/completeTask', authMiddleware, completeTask);

export default userRouter;