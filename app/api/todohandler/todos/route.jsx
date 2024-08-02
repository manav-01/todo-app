import connectDB from "@/database";
import { User } from "@/models/user.model";
import { Todo } from "@/models/todo.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userId } = await request.json();
  await connectDB();
  console.log("User Id ",userId)
  const todos = await Todo.find({userId});
    
  return NextResponse.json({ todos });
}
// export async function POST(request) {
//   const { email } = await request.json();
//   await connectDB();
//   const userData = await User.findOne({ email }).select("-password -createdAt");

//   if(!userData){console.log("User not found")}
//   console.log(userData)

//   const todos = await Todo.find({userId : userData._id});
    
//   return NextResponse.json({ todos });
// }
