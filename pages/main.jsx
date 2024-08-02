import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "./Dashboard";
import ManageTodoMaker from "@/components/ManageTodoMaker";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/featured/authSlice";
import { addData } from "@/featured/todoDataSlice";

// Function to fetch user data based on email
const fetchUserData = async (email) => {
  try {
    const res = await fetch("api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      console.error("Error fetching user data");
      return null;
    }

    const { userData } = await res.json();
    return userData;
  } catch (error) {
    console.error("Error in fetchUserData:", error);
    return null;
  }
};

// Function to fetch all data
// const fetchAllData = async () => {
//   try {
//     const res = await fetch("api/todohandler", {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Error in fetchAllData:", error);
//   }
// };

// Function to fetch all data

const fetchAllData = async (userId) => {
  try {
    const res = await fetch("api/todohandler/todos", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({ userId }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return  res.json();
  } catch (error) {
    console.error("Error in fetchAllData:", error);
  }
};

const TodoComponent = () => {
  const [userData, setUserData] = useState(null);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth?.userData?.id);
  const emailData = session?.user?.email;

   
  // Fetch and set user data based on email
  useEffect(() => {
    if (emailData) {
      const fetchData = async () => {
        const data = await fetchUserData(emailData);
        setUserData(data);
      };

      fetchData();
    }
  }, [emailData]);

  // Update Redux store with user data
  useEffect(() => {
    if (userData) {
      dispatch(login({ ...userData, id: userData["_id"] }));
    
    } else {
      dispatch(logout());
    }
  }, [userData, dispatch]);

  // Fetch and dispatch all todo data

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        const data = await fetchAllData(userId);
       
        if (data) {
          dispatch(addData(data.todos));
        }
      };

      fetchData();
    }
  }, [userId, dispatch]);

  return (
    <>
      <Sidebar />
      <ManageTodoMaker />
      <Dashboard />
    </>
  );
};

export default TodoComponent;
