import React from 'react'
import Image from 'next/image';
import ShareImg from "@/assert/dashboard/main/share.png";
import FilterImg from "@/assert/dashboard/main/filter.png";
import AutomationImg from "@/assert/dashboard/main/automation.png";
import CalanderImg from "@/assert/dashboard/main/calander.png";
import SearchGlassImg from "@/assert/dashboard/main/search-glass.png";
import NewTaskPluse from "/assert/dashboard/sidebar/new-task-pluse.png";
import { useDispatch } from 'react-redux';
import { updateCredantials } from '@/featured/todoHandlerSlice';


function FunctionCard() {

  const dispatch = useDispatch();

   const btnEventHandler = (e) => {
     e.preventDefault();
     const isCreateTodo = true;
     const statusTodo = e.target.dataset.status ?? "";
     try {
       dispatch(updateCredantials({ statusTodo, isCreateTodo }));
     } catch (error) {
      
     }
   };

  return (
    <div class="flex flex-row justify-between items-center mb-4">
      <div class="flex flex-row items-center justify-between px-2 bg-white rounded-md">
        <input
          type="text"
          name="Search"
          placeholder="Search"
          id=""
          class="bg-white input-form outline-none"
        />
        <Image src={SearchGlassImg} alt="Search" />
      </div>
      <div class="flex flex-row gap-2">
        <div class="flex items-center gap-3 p-2 text-lg rounded-md outline-none border-none shadow-sm">
          <p>Calender View</p>
          <Image src={CalanderImg} alt="Home" />
        </div>
        <div class="flex items-center gap-3 p-2 text-lg rounded-md outline-none border-none shadow-sm">
          <p>Automation</p>
          <Image src={AutomationImg} alt="Automation" />
        </div>
        <div class="flex items-center gap-3 p-2 text-lg rounded-md outline-none border-none shadow-sm">
          <p>Filter</p>
          <Image src={FilterImg} alt="Filter" />
        </div>
        <div class="flex items-center gap-3 p-2 text-lg rounded-md outline-none border-none shadow-sm">
          <p>Share</p>
          <Image src={ShareImg} alt="Share" />
        </div>

        <button
          class="create-task outline-none flex bg-bg-sub-btn text-white p-2 items-center justify-center gap-2 rounded-md"
          type="submit"
          data-status=""
          onClick={btnEventHandler}
        >
          Create task
          <Image src={NewTaskPluse} alt="new task" />
        </button>
      </div>
    </div>
  );
}

export default FunctionCard