import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  task: { type: String, required: true },
  status: { type: Boolean, default: false },
});

const taskModel = mongoose.models.task || mongoose.model("task", taskSchema);

export default taskModel;
