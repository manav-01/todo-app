// "use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import StatusImg from "/assert/dashboard/task_model/status.png";
import PriorityImg from "/assert/dashboard/task_model/priority.png";
import DeadlineImg from "/assert/dashboard/task_model/deadline.png";
import DescriptionImg from "/assert/dashboard/task_model/description.png";
import AddImg from "/assert/dashboard/task_model/add.png";
import NewTaskImg from "/assert/dashboard/sidebar/new-task-pluse.png";

import Select from "./Select";
import Input from "./Input";
import RTE from "./RTE";
import { useDispatch,useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { updateCredantials } from "@/featured/todoHandlerSlice";

function TodoForm({
  isEditabel = false,
  title,
  status,
  priority,
  deadline,
  description,
  todoId,
}) {
  const Router = useRouter();
  const dispatch = useDispatch();

  const isTodoEditable = useSelector((state) => {
    state.todoHandler.editTodoId;
  });
  const isTodoCredantials = useSelector(
    (state) => state.todoHandler.isCreateTodo
  );
  const userId = useSelector((state) => state.auth?.userData?.id);

  const { register, handleSubmit, reset, control, getValues } = useForm({
    defaultValues: {
      title: title || "",
      status: status || "",
      priority: priority || "",
      deadline: deadline || "",
      description: description || "",
    },
  });

  const inputRef = useRef();
  const statusRef = useRef();
  const priorityRef = useRef();
  // const textAreaRef = useRef();

 

  const handleReset = () => {
    // reset();
    reset({
      title: "",
      status: "",
      priority: "",
      deadline: "",
      description: "",
    });
  };

   useEffect(() => {
     if (!isTodoCredantials) {
       handleReset();
     }
   }, [isTodoCredantials]);

  useEffect(() => {
    reset({ title, status, priority, deadline, description });
  }, [title, status, priority, deadline, description, reset]);

  // Add data On Database or Update

  const onSubmit = async (data) => {

    if (isEditabel) {

      if ((!title, !status, !priority, !deadline, !description)) {
        console.log("All Fields are rquired");
      }

      try {
        const res = await fetch(`/api/todohandler`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ...data, userId, todoId }),
        });

        if (res.ok) {
          const isCreateTodo = false;
          const editTodoId = null;
          dispatch(updateCredantials({ isCreateTodo }));
          dispatch(updateCredantials({ editTodoId }));
          Router.push("/");
        } else {
          throw new Error("Failed to update a Todo Task");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      if ((!title, !status, !priority, !deadline, !description)) {
        console.log("All Fields are required");
      }

      try {
        const res = await fetch("api/todohandler", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ...data, userId }),
        });

        if (res.ok) {
          const isCreateTodo = false;
          dispatch(updateCredantials({ isCreateTodo }));
          Router.push("/");
        } else {
          throw new Error("Failed to create a Todo Task");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        classname="w-full bg-transparent font-barlow font-semibold text-4xl outline-none border-none mb-8"
        type="text"
        placeholder="Title"
        ref={inputRef}
        {...register("title", { required: true })}
      />

      <div className="flex justify-start items-center">
        <div className="w-30">
          <Image src={StatusImg} className="inline-block mr-4" alt="status" />
          <label htmlFor="status" className="mr-8">
            Status
          </label>
        </div>
        <Select
          id="status"
          options={["To do", "In Progress", "Under Review", "Finished"]}
          ref={statusRef}
          {...register("status", { required: true })}
        />
      </div>

      <div className="flex justify-start items-center">
        <div className="w-30">
          <Image
            src={PriorityImg}
            className="inline-block mr-4"
            alt="priority"
          />
          <label htmlFor="priority" className="mr-8">
            Priority
          </label>
        </div>
        <Select
          id="priority"
          options={["urgent", "medium", "low"]}
          ref={priorityRef}
          {...register("priority", { required: true })}
        />
      </div>

      <div className="flex justify-start items-center">
        <div className="w-30">
          <Image
            src={DeadlineImg}
            className="inline-block mr-4"
            alt="deadline"
          />
          <label>Deadline</label>
        </div>
        <Input
          className="bg-transparent outline-none pl-1"
          type="date"
          {...register("deadline", { required: true })}
        />
      </div>

      <div className="flex justify-start items-start">
        <div className="min-w-30">
          <Image
            src={DescriptionImg}
            className="inline-block mr-4"
            alt="description"
          />
          <label>Description</label>
        </div>
        
        <RTE
          name="description"
          control={control}
          defaultValue={getValues("description")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <button
          className="w-fit outline-none flex  text-black mt-5 items-center justify-between gap-3 rounded-md"
          type=""
          disabled
        >
          <Image src={AddImg} alt="add custom property" />
          Add custom property
        </button>
        <div className="flex items-center justify-start gap-1 m-4">
          <button
            className="create-task outline-none flex bg-bg-sub-btn text-white p-2 items-center justify-center gap-2 rounded-md"
            type="submit"
          >
            {isEditabel ? "Upadet task" : "Create new task"}
            <Image src={NewTaskImg} alt="new task" />
          </button>

          <button
            className="create-task outline-none flex bg-bg-sub-btn text-white p-2 items-center justify-center gap-2 rounded-md"
            type="button"
            onClick={handleReset}
          >
            Reset task
            <Image src={NewTaskImg} alt="new task" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
