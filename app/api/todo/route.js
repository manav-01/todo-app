import connectDB from "@/database";
import { Todo } from "@/models/todo.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { id } = await request.json();
  console.log(id)
  await connectDB();
  const todo = await Todo.findOne({ _id : id }).select("-password -createdAt");
  if(!todo) {console.log("Data not get")}
  console.log(todo);
  return NextResponse.json({ todo });
}
