import React from 'react'
import Image from 'next/image'
import TodoCard from './TodoCard';
import newTaskPluse from "/assert/dashboard/sidebar/new-task-pluse.png";
import shorDataImg from "/assert/dashboard/main/end-shower.png"
import Link from 'next/link';


function TodoSection() {

    const data = [
      {
        _id: 1,
        status: "To do",
        title: "Implement User Authentication",
        description:
          "Develop and integrate user authentication using email and password.",
        priority: "urgent",
        deadline: "2024-08-15",
        updatedAt: "1 hr ago",
      },

      {
        _id: 2,
        status: "In Progress",
        title: "Design Home Page UI",
        description:
          "Develop and integrate user authentication using email and password.",
        priority: "medium",
        deadline: "2024-08-15",
        updatedAt: "1 hr ago",
      },

      {
        _id: 3,
        status: "In Progress",
        title: "Conduct User Feedback Survey",
        description:
          "Collect and analyze user feedback to improve app features.",
        priority: "low",
        deadline: "2024-08-15",
        updatedAt: "3 hr ago",
      },

      {
        _id: 4,
        status: "Under View",
        title: "Integrate Cloud Storage",
        description:
          "Enable cloud storage for note backup and synchronization.",
        priority: "urgent",
        deadline: "2024-08-20",
        updatedAt: "2 days ago",
      },

      {
        _id: 5,
        status: "Finished",
        title: "Test Cross-browser Compatibility",
        description:
          "Ensure the app works seamlessly across different web browsers.",
        priority: "urgent",
        deadline: "2024-08-18",
        updatedAt: "4 days ago",
      },
    ];

  return (
    <div class="grid grid-flow-row grid-cols-4 gap-4 bg-white p-3 rounded-md mb-4">
      {/* <!-- 1 First TODo Section  --> */}
      <div class="flex flex-col justify-start gap-4">
        {/* <!-- 1 --> */}
        <div class="flex justify-between items-center text-lg ">
          <p>To do</p>
          <Image src={shorDataImg} alt="To do" />
        </div>
        <div id="todo_loader" class="flex flex-col gap-4">
          {/* <!-- Component of card  --> */}

          {data?.map((todo) => {
            if (todo.status === "To do") {
              return <TodoCard {...todo} />;
            }
          })}
        </div>

        {/* <!-- Add New Component  --> */}
        <button
          class="w-full outline-none flex bg-add-btn text-white p-2 items-center justify-between gap-2 rounded-md"
          type="submit"
          statusData="To do"
        >
          Add new
          <Image src={newTaskPluse} alt="new task" />
        </button>
      </div>

      {/* <!-- 2 In Progress --> */}
      <div class="flex flex-col justify-start gap-4">
        {/* <!-- 1 --> */}
        <div class="flex justify-between items-center text-lg ">
          <p>In Progress</p>
          <Image src={shorDataImg} alt="In Progress" />
        </div>
        <div id="in_progress_loader" class="flex flex-col gap-4">
          {/* <!-- Component of card  --> */}
          {data?.map((todo) => {
            if (todo.status === "In Progress") {
              return <TodoCard {...todo} />;
            }
          })}
        </div>

        {/* <!-- Button of Add New Component  --> */}
        <button
          class="w-full outline-none flex bg-add-btn text-white p-2 items-center justify-between gap-2 rounded-md"
          type="submit"
          statusData="In Progress"
        >
          Add new
          <Image src={newTaskPluse} alt="new task" />
        </button>
      </div>

      {/* <!-- 3 Under View --> */}
      <div class="flex flex-col justify-start gap-4">
        {/* <!-- 1 --> */}
        <div class="flex justify-between items-center text-lg ">
          <p>Under View</p>
          <Image src={shorDataImg} alt="Under View" />
        </div>
        <div id="under_view_loader" class="flex flex-col gap-4">
          {/* <!-- Component of card  --> */}
          {data?.map((todo) => {
            if (todo.status === "Under View") {
              return <TodoCard {...todo} />;
            }
          })}
        </div>

        {/* <!-- Add New Component  --> */}
        <button
          class="w-full outline-none flex bg-add-btn text-white p-2 items-center justify-between gap-2 rounded-md"
          type="submit"
          statusData="Under View"
        >
          Add new
          <Image src={newTaskPluse} alt="new task" />
        </button>
      </div>

      {/* <!-- 4 Finished --> */}

      <div class="flex flex-col justify-start gap-4 ">
        {/* <!-- 1 --> */}
        <div class="flex justify-between items-center text-lg ">
          <p>Finished</p>
          <Image src={shorDataImg} alt="To do" />
        </div>
        <div id="finished_loader" class="flex flex-col gap-4">
          {/* <!-- Component of card  --> */}
          {data?.map((todo) => {
            if (todo.status === "Finished") {
              return <TodoCard {...todo} />;
            }
          })}
        </div>

        {/* <!-- Add New Component  --> */}

        <Link href={`/editTopic/12`}>
          <button
            class="w-full outline-none flex bg-add-btn text-white p-2 items-center justify-between gap-2 rounded-md"
            type="submit"
            statusData="Finished"
          >
            Add new
            <Image src={newTaskPluse} alt="new task" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TodoSection