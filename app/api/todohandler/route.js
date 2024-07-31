import connectDB from "@/database";
import { Todo } from "@/models/todo.model";
import { NextResponse } from "next/server";

export async function POST(request){
    const {userId, status,priority, deadline, description} = await request.json();

    await connectDB();
    await Todo.create({ userId, status, priority, deadline, description });

    return NextResponse.json({ message: "Todo Created Successfully" }, { status: 201 });

}

export async function GET(request) {
    const {request} = await request.json();
  await connectDB();
  const todoData = await Todo.find();
  return NextResponse.json({ todoData });
}

export async function DELETE(request){

    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}