import connectDB from "@/database/index";
import {User} from "@/models/user.model.js";
import { NextResponse } from "next/server";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";

export async function POST(req) {
  try {
    const { fullName, email, password } = await req.json();
    // console.log("Server", fullName, email, password);
    if (!fullName || !email || !password) {
     return NextResponse.json(new ApiError(400, "All fields are required"), {
       status: 400,
     });
    }
   
      await connectDB()
      .catch((e) => { return NextResponse.json(
        { message: "Database Connection failed" },
        { status: 500 }
      );});
      
     


    const existUser = await User.findOne( { email });
    
    if (existUser) {
       return NextResponse.json(
         {message: "User with email already exists"},
         { status: 409 }
       );
    }

    const user = await User.create({ fullName, email, password });

    if(!user){
      return NextResponse.json(
        new ApiError(500, "Something went wrong while registering the user"),
        { status: 500 }
      );
    }

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      return NextResponse.json(
        new ApiError(500, "Something went wrong while find user the user"),
        { status: 500 }
      );
    }

    return NextResponse.json(
      new ApiResponse(201, createdUser, "User successfully registed."),
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      new ApiError(500, error.message),
      { status: 500 },
      
    );
  }
}
