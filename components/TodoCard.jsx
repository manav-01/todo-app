import React from 'react'
import Image from 'next/image'
import TimeIconImg from "@/assert/dashboard/main/time-icon.png"
function TodoCard({_id,title,description,priority,deadline,updatedAt}) {
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
  return (
    //  <!-- Component of card  -->
    <div
      id={_id}
      class="bg-active-bg2 border--btn p-4 rounded-md flex flex-col gap-4 items-baseline"
    >
      <div class="flex flex-col gap-2 items-baseline">
        <p class="text-left font-medium text-wrap">
          {title ? title : "Implement User Authentication"}
        </p>
        <p class="text-left text-sm">
          {description ??
            "Develop and integrate user authentication using email and password."}
        </p>
        <p
          class={`text-xs ${getBgClass(priority)} rounded-lg py-1 px-2 text-white inline-block`}
        >
          {priority}
        </p>

        <div class="flex items-center gap-3 text-sm font-semibold">
          <Image src={TimeIconImg} alt="Home" />
          <p class="text-[#606060]">{deadline ?? "2024-08-15"}</p>
        </div>
      </div>
      <p class="text-sm font-medium">{updatedAt ?? "1 hr ago"}</p>
    </div>
  );
}

export default TodoCard