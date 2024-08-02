import React, { useRef } from 'react'
import Image from 'next/image'
import TodoCard from './TodoCard';
import newTaskPluse from "/assert/dashboard/sidebar/new-task-pluse.png";
import shorDataImg from "/assert/dashboard/main/end-shower.png"
import { useDispatch, useSelector } from 'react-redux';
import { updateCredantials } from '@/featured/todoHandlerSlice';

function TodoSection() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todoData.todos || []);
  

  const btnEventHandler = (e) =>{
    e.preventDefault();
    const isCreateTodo = true;
    const statusTodo = e.target.dataset.status ?? ""; 
    try {
      dispatch(updateCredantials({ statusTodo, isCreateTodo }));
    } catch (error) {
      console.log(error)
    }
  };

   

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
          data-status="To do"
          onClick={btnEventHandler}
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
          data-status="In Progress"
          onClick={btnEventHandler}
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
            if (todo.status === "Under Review") {
              return <TodoCard {...todo} />;
            }
          })}
        </div>

        {/* <!-- Add New Component  --> */}
        <button
          
          class="w-full outline-none flex bg-add-btn text-white p-2 items-center justify-between gap-2 rounded-md"
          type="submit"
          data-status="Under Review"
          onClick={btnEventHandler}
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

        <button
          
          class="w-full outline-none flex bg-add-btn text-white p-2 items-center justify-between gap-2 rounded-md"
          type="submit"
          data-status="Finished"
          onClick={btnEventHandler}
        >
          Add new
          <Image src={newTaskPluse} alt="new task" />
        </button>
      </div>
    </div>
  );
}

export default TodoSection