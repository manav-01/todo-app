"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import StatusImg from "/assert/dashboard/task_model/status.png";
import PriorityImg from "/assert/dashboard/task_model/priority.png";
import DeadlineImg from "/assert/dashboard/task_model/deadline.png";
import DescriptionImg from "/assert/dashboard/task_model/description.png";
import AddImg from "/assert/dashboard/task_model/add.png";
import NewTaskImg from "/assert/dashboard/sidebar/new-task-pluse.png";
import AutoExpandTextarea from "./AutoExpandTextarea";
import Select from "./Select";
import Input from "./Input";

function TodoForm({isEditabel= false , title, status, priority, deadline, description }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: title || "",
      status: status || "" ,
      priority: priority || "",
      deadline: deadline || "",
      description: description || "" ,
    },
  });
  const inputRef = useRef();
  const statusRef = useRef();
  const priorityRef = useRef();
  const textAreaRef = useRef();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        className="w-full bg-transparent font-barlow font-semibold text-4xl outline-none border-none mb-8"
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
        <AutoExpandTextarea
          className="bg-transparent outline-none pl-2 w-full text-justify"
          ref={textAreaRef}
          {...register("description", { required: true })}
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

        <button
          className="create-task outline-none flex bg-bg-sub-btn text-white p-2 items-center justify-center gap-2 rounded-md"
          type="submit"
        >
          {isEditabel ? "Upadet task" : "Create new task" }
          <Image src={NewTaskImg} alt="new task" />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
