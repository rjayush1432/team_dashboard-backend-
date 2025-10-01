const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  assignee: { type: String, required: true },
  description: { type: String, default: "" },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
  deadline: { 
    type: Date,
    validate: {
      validator: value => !value || value > new Date(),
      message: "Deadline must be in the future"
    }
  }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
