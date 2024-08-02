import connectDB from "@/database";
import { Todo } from "@/models/todo.model";
import { NextResponse } from "next/server";

// export async function PUT(request, { params }) {
//     const {id} = params;
//     const {status, priority, deadline, description} = await request.json();
//     await connectDB();
//     await Todo.findByIdAndUpdate(id, {
//       status,
//       priority,
//       deadline,
//       description,
//     });
//     return NextResponse.json({ message: "Todo updated" }, { status: 200 });
// }



export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const Todo = await Todo.findOne({ _id: id });
  return NextResponse.json({ Todo }, { status: 200 });
}

// export async function GET(request, { params }) {
//   const { id } = params;
//   await connectMongoDB();
//   const Todo = await Todo.find({ userId: id });
//   return NextResponse.json({ Todo }, { status: 200 });
// }

