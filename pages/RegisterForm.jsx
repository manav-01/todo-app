"use client"
import {useState, useEffect, useRef} from "react"
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ApiError } from "@/utils/ApiError";
import { signIn } from "next-auth/react";



export default function RegisterForm() {
    const router = useRouter();
    const submitButtonId = useRef(null);
    const [isInputEmpty, setIsInputEmpty] = useState(true);
    const [error, setError] = useState("");

    const {register, handleSubmit, setValue, watch} = useForm();

    const fullName = watch("fullName");
    const email = watch("email");
    const password = watch("password");

    useEffect(() => {
      setError("");
      setIsInputEmpty(email === "" || password === "" || fullName === "");
    }, [email, password, fullName]);

    const SignInSubmit = async (data) => {
        // console.log(data);

        try {
          
          const createUserRes = await fetch("api/register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
              {
                fullName:data.fullName,
                email: data.email,
                password: data.password
              }
            ),
          });

          const apiResponse= await createUserRes.json();

          if(createUserRes.ok) {
            setValue("fullName","");
            setValue("email","");
            setValue("value","");

            try {
              const signIpRes = await signIn("credentials", {
                email,
                password,
                redirect: false,
              });

              const res = signIpRes;
              // console.log("signIpRes", res);

              if (signIpRes.error) {
                setError(`Invalid Credentials : ${signIpRes.error}`);
                return;
              }

              router.replace("/");
            } catch (error) {
              console.log(error);
            }


            router.push("/dashboard");
          }else{
            setError(apiResponse.message);
            
          }

          
        } catch (error) {
          setError("Error during registration: ");
         console.log("Error during registration: ", error);
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

              <p className="text-red-600 text-center">{error && error}</p>

              <div className="w-full flex flex-col my-4 ">
                <form
                  className="w-full flex flex-col gap-1 "
                  onSubmit={handleSubmit(SignInSubmit)}
                >
                  <Input
                    classname="input-form p-2 focus:outline-none focus:border-solid focus:border-[#999999] focus:border rounded-md"
                    type="text"
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setValue("fullName", e.target.value)}
                    {...register("fullName", { required: true })}
                  />

                  <Input
                    classname="input-form p-2 focus:outline-none focus:border-solid focus:border-[#999999] focus:border rounded-md"
                    type="text"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setValue("email", e.target.value)}
                    {...register("email", { required: true })}
                  />

                  <Input
                    classname="input-form p-2 focus:outline-none focus:border-solid focus:border-[#999999] focus:border rounded-md"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setValue("password", e.target.value)}
                    {...register("password", { required: true })}
                  />

                  <Button
                    classname={`p-2  bg-bg-sub-btn  rounded-md border-btn-bd border-solid border-width text-white outline-none shadow-md ${
                      isInputEmpty ? "cursor-not-allowed " : ""
                    }`}
                    type="submit"
                    children="Login"
                    ref={submitButtonId}
                    disabled={isInputEmpty}
                  />
                </form>

                <p className=" mt-4 text-[#606060] text-center">
                  Already have an account?{" "}
                  <Link href="/">
                    <span className="text-[#0054A1]">Log in.</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
} 