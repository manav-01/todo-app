import connectDB from "@/database";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(request){
    const {email} = await request.json();
    await connectDB();
    const userData = await User.findOne({ email }).select(
      "-password -createdAt"
    );
    return NextResponse.json({ userData });
}