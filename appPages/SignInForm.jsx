"use client";

import { useState, useEffect, useRef } from "react";
import Input from "/components/Input";
import Button from "/components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";

function SignUpForm() {
  const submitButtonId = useRef(null);

  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [error, setError] = useState("");

  const { register, handleSubmit, setValue, watch } = useForm();
  // const { register, handleSubmit, setValue, watch } = useForm({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  const router = useRouter();

  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    setError("");
    setIsInputEmpty(email === "" || password === "");
  }, [email, password]);

  const SignInSubmit = async (data) => {
    // console.log(data); // This should now log the form data correctly
    setError("");
   
    try {
      const signIpRes = await signIn("credentials", {
        email ,
        password,
        redirect: false
      })

      const res = signIpRes;
      // console.log("signIpRes" ,res);

      if(signIpRes.error){
        setError(`Invalid Credentials : ${signIpRes.error}`);
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="bg-gradient-bg min-h-lvh flex justify-center items-center">
        <div className="px-8 py-6 bg-white rounded-md">
          <div className="py-4 px-6 flex flex-col">
            <h1 className="px-5 text-4xl text-center text-cl-title font-[barlow] font-semibold">
              Welcome to <span className="text-[#4534AC]">Workflo</span>!
            </h1>

            <p className="text-red text-center">{error && error}</p>

            <div className="w-full flex flex-col my-4 ">
              <form
                className="w-full flex flex-col gap-1"
                onSubmit={handleSubmit(SignInSubmit)} 
              >
                <Input
                  classname="input-form p-2 focus:outline-none focus:border-solid focus:border-[#999999] focus:border rounded-md"
                  type="text"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setValue("email", e.target.value)}
                  {...register("email",{required:true})}
                />

                <Input
                  classname="input-form p-2 focus:outline-none focus:border-solid focus:border-[#999999] focus:border rounded-md"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setValue("password", e.target.value)}
                  {...register("password", {
                    required: true,
                  })}
                />

                <Button
                  classname={`p-2 bg-bg-sub-btn rounded-md border-btn-bd border-solid border-width text-white outline-none shadow-md ${
                    isInputEmpty ? "cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  ref={submitButtonId}
                  disabled={isInputEmpty}
                >
                  Login
                </Button>
              </form>

              <p className="mt-4 text-[#606060] text-center">
                Don’t have an account? Create a{" "}
                <Link href="/register">
                  <span className="text-[#0054A1]">new account.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
