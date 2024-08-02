import React, { useRef } from 'react'
import Image from 'next/image'
import TimeIconImg from "@/assert/dashboard/main/time-icon.png"
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { updateCredantials } from '@/featured/todoHandlerSlice';
import parse from "html-react-parser";
function TodoCard({_id,title,description,priority,deadline,updatedAt}) {
  const dispatch = useDispatch();
  const editId = useRef(null);

  const onEditeHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateCredantials({
        editTodoId: editId.current?.dataset?.todoid,
        isCreateTodo: true,
      })
    );
  };

  function getBgClass(priority) {
    switch (priority) {
      case "low":
        return "bg-low";
      case "medium":
        return "bg-medium";
      case "urgent":
        return "bg-urgent";
      default:
        return "bg-low";
    }
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function getTimeDifference(createdValue) {
    const createdDate = new Date(createdValue);
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = now - createdDate;
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));

    // Determine the appropriate return value based on the time difference
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} min ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hr${diffInHours > 1 ? "s" : ""} ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    } else if (diffInWeeks < 52) {
      return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
    } else {
      return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
    }
  }

  function formatDate(timestamp) {
    // Create a Date object from the timestamp
    const date = new Date(timestamp);

    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");

    // Return the formatted date
    return `${year}-${month}-${day}`;
  }

 

  return (
    //  <!-- Component of card  -->
    <div
      id={_id}
      className="bg-active-bg2 border--btn p-4 rounded-md flex flex-col gap-4 items-baseline relative hover-trigger"
    >
      <div className="absolute bottom-1 right-1 flex gap-2 hidden hover-content">
        <RemoveBtn id={_id} />
        <button
          href={""}
          ref={editId}
          data-todoId={_id}
          onClick={onEditeHandler}
        >
          <HiPencilAlt size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-2 items-baseline">
        <p className="text-left font-medium text-wrap">
          {title ? title : "Implement User Authentication"}
        </p>
        <p className="text-left text-sm">
          {parse(description) ??
            "Develop and integrate user authentication using email and password."}
        </p>
        <p
          className={`text-xs ${getBgClass(
            priority
          )} rounded-lg py-1 px-2 text-white inline-block`}
        >
          {capitalizeFirstLetter(priority)}
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Image className=' align-middle' src={TimeIconImg} alt="Home" />
          <p className="text-[#606060]">{formatDate(deadline) ?? "2024-08-15"}</p>
        </div>
      </div>
      <p className="text-sm font-medium">
        {getTimeDifference(updatedAt) ?? "1 hr ago"}
      </p>
    </div>
  );
}

export default TodoCard