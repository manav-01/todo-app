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

function ManageTodoMaker() {
  
  return (
    //  <!-- Task Model  -->
    <aside className=" fixed top-0 right-0 bottom-0 w-2/5  p-4 bg-sidebar-gb transition-all ease-in-out  duration-130 overflow-y-auto">
      <div className="flex justify-between mb-6">
        <div className="flex gap-1 justify-center items-center">
          <a href="/">
            <Image src={CancelImg} alt="Cancel" />
            {/* <!-- className="w-8 h-8" --> */}
          </a>
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
        <TodoForm title={"Hello"} status={"To do"} priority={"low"} deadline={"2024-07-12"} description={""}/>
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
