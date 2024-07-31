"use client";
// import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import MainDashboard from "@/pages/dashboard";
import ManageTodoMaker from "@/components/ManageTodoMaker";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/featured/authSlice";
import { addData } from "@/featured/todoDataSlice";



function main() {
  const [userData, setUserData] = useState(null);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userData);
  const userTodo = useSelector((state) => state.todoData);

  // console.log(userId["_id"])
  console.log(userTodo)

  const emailData = session?.user?.email;

  useEffect(() => {
    if (emailData) {
      const fetchData = async () => {
        const data = await getUserData(emailData);
        setUserData(data);
      };

      fetchData();
    }
  }, [emailData]);

  useEffect(() => {
    if (userData) {
      dispatch(login({ ...userData, id: userData["_id"]  }));
    } else dispatch(logout());
  }, [userData]);
  const getUserData = async (email) => {
    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        console.log("Getdata has Error");
      }

      const data = await res.json();

      // console.log(data.userData)

      return data.userData;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  // Get all User Data
  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        const data = await getAllData(userId);
        if (data) {
          dispatch(addData(data)); // Correctly dispatching the action
        }
      };

      fetchData();
    }
  }, [userId]);

  // fun all data get
  const getAllData = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/todohandler/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }

      return res.json();
    } catch (error) {
      console.log("Error Get All Data: ", error);
    }
  };

  // useEffect(() =>{})
  // console.log(userData)

  return (
    <>
      {/* <ManageTodoMaker /> */}
      <Sidebar />
      <MainDashboard />
    </>
  );
}

export default main;

// export default function Main() {
//   const { data: session } = useSession();
//   const d = useSession();

//   console.log(d)
//   return (
//     <div className="grid place-items-center h-screen">
//       <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
//         <div>

//           Name: <span className="font-bold">{session?.user?.fullName}</span>
//         </div>
//         <div>
//           Email: <span className="font-bold">{session?.user?.email}</span>
//         </div>
//         <button
//           onClick={() => signOut()}
//           className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
//         >
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// }
