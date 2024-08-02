import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
    title: {
      type: String,
    },
    status: {
      type: String,
      enum: ["To do", "In Progress", "Under Review", "Finished"],
      required: true,
    },
    priority: {
      type: String,
      enum: ["urgent", "medium", "low"],
      required: true,
    },
    deadline: {
      type: Date,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);