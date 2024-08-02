import connectDB from "@/database/index";
import { User } from "@/models/user.model";
import { ApiError } from "@/utils/ApiError";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { signOut } from "next-auth/react";
import { NextResponse } from "next/server";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB().catch((e) => {
            return NextResponse.json(
              { message: "Database Connection failed" },
              { status: 500 }
            );
          });

          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

         



          const isPasswordValid = await user.isPasswordCorrect(password);

          
          if (!isPasswordValid) {
            return null;
             
             
          }
          
          return user;

          // const loggedInUser = await User.findById(user._id).select(
          //   " -password "
          // );

         

          // return  loggedInUser;

          // return NextResponse.json(
          //   {statusCode : 201,
          //     user: loggedInUser,
          //     message: "User successfully logged In"
          //   },
          //   { status: 201 }
          // )
        } catch (error) {
          return NextResponse.json(new ApiError(404, error.message), {
            status: 404,
          });
        }
      },
    }),
  ],
  session: {
    startegy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
