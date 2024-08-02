// "use client"
import React from "react";
import Image from "next/image";
import CancelImg from "/assert/dashboard/task_model/cancel.png";
import StarchImg from "/assert/dashboard/task_model/starch.png";
import ShareImg from "/assert/dashboard/task_model/share.png";
import StarImg from "/assert/dashboard/task_model/star.png";
import StatusImg from "/assert/dashboard/task_model/status.png";
import PriorityImg from "/assert/dashboard/task_model/priority.png";
import DeadlineImg from "/assert/dashboard/task_model/deadline.png";
import DescriptionImg from "/assert/dashboard/task_model/description.png";
import AddImg from "/assert/dashboard/task_model/add.png";
import NewTaskImg from "/assert/dashboard/sidebar/new-task-pluse.png";
import TodoForm from "./TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateCredantials } from "@/featured/todoHandlerSlice";

function ManageTodoMaker() {
  
  const createTodo = useSelector((state) => state.todoHandler.isCreateTodo); 
  const editableTodoId = useSelector((state) => state.todoHandler.editTodoId); 
  const statusTodo = useSelector((state) => state.todoHandler.statusTodo); 
  const dispatch = useDispatch();
 const [taskData, setTaskData] = useState({});
 const [isEditable, setIsEditable] = useState(false);

 const fetchUserData = async (id) => {
   try {
     const res = await fetch("api/todo", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ id }),
     });

     if (!res.ok) {
       console.error("Error fetching user data");
       return null;
     }

     return res.json();

     const responseData = await res.json();
   
     return responseData.data; // Ensure this is the correct path to data
   } catch (error) {
     console.error("Error in fetchUserData:", error);
     return null;
   }
 };

 useEffect(() => {
   const loadData = async () => {
     if (editableTodoId) {
       setIsEditable(true);

       const todo = await fetchUserData(editableTodoId); // Await the data

     
       if (todo) {
         setTaskData(todo.todo); // Correctly set the state
       } else {
         console.error("Todo not found or error in fetching");
       }
     } else {
       setIsEditable(false);
     }
   };

   loadData();

  
 }, [editableTodoId]);

  

  // close tab button function
  const closeTabButton = () => {
    try {
      const isCreateTodo = false;
      dispatch(updateCredantials({ isCreateTodo, editTodoId:null }));
    } catch (error) {
      console.log(error)
    }
  }

  function formatDate(dateString) {
    // Create a new Date object from the input date string
    const date = new Date(dateString);

    // Extract the year, month, and day from the Date object
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so we add 1
    const day = String(date.getUTCDate()).padStart(2, "0");

    // Combine year, month, and day into the desired format
    return `${year}-${month}-${day}`;
  }

  
  
  return (
    //  <!-- Task Model  -->
    <aside
      className={`${
        createTodo ? "" : "hidden"
      } z-10 fixed top-0 right-0 bottom-0 w-2/5  p-4 bg-sidebar-gb transition-all ease-in-out  duration-130 overflow-y-auto`}
    >
      <div className="flex justify-between mb-6">
        <div className="flex gap-1 justify-center items-center">
          <button href="/" onClick={closeTabButton}>
            <Image src={CancelImg} alt="Cancel" />
            {/* <!-- className="w-8 h-8" --> */}
          </button>
          <a href="/">
            <Image src={StarchImg} alt="Starch" />
            {/* <!-- className="w-8 h-8" --> */}
          </a>
        </div>

        <div className="flex gap-1 justify-center items-center">
          <div className="flex items-center gap-3 p-2  rounded-md border--btn bg-active-bg">
            <p>Share</p>
            <Image src={ShareImg} alt="Share Iamge" />
          </div>

          <div className="flex items-center gap-3 p-2  rounded-md border--btn bg-active-bg">
            <p>Favorite</p>
            <Image src={StarImg} alt="Home" />
          </div>
        </div>
      </div>
      {/* <!-- https://stackoverflow.com/questions/24271242/prevent-user-from-typing-in-input-at-max-value --> */}
      {/* <!-- https://jsfiddle.net/M6SM2/488/ --> */}

      <div>

        {isEditable ? (
          <TodoForm
            todoId={taskData?.["_id"]}
            isEditabel={isEditable}
            status={statusTodo || taskData?.status || ""}
            title={taskData?.title || ""}
            priority={taskData?.priority || ""}
            deadline={formatDate(taskData?.deadline) || ""}
            description={taskData?.description || ""}
          />
        ) : (
          <TodoForm
            isEditabel={isEditable}
            status={statusTodo || ""}
          />
        )}
        {/* <TodoForm title={"Hello"} status={"To do"} priority={"low"} deadline={"2024-07-12"} description={""}/> */}
      </div>
      <div>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 " />
        <p>Start writing, or drag your own files here.</p>
      </div>

      {/* <AutoExpandTextarea ref={ref} /> */}
    </aside>
  );
}

export default ManageTodoMaker;
