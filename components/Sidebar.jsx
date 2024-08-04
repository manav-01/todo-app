import Image from "next/image";
import HomeImg from "/assert/dashboard/sidebar/home.png";
import Notification from "/assert/dashboard/sidebar/notofication.png";
import UpdateStatusImage from "/assert/dashboard/sidebar/update-status.png";
import MoreInfoImg from "/assert/dashboard/sidebar/more-info.png";
import BoardImg from "/assert/dashboard/sidebar/board.png";
import SettingImg from "/assert/dashboard/sidebar/setting.png";
import TeamImg from "/assert/dashboard/sidebar/teams.png";
import AnalyticsImg from "/assert/dashboard/sidebar/analytics.png";
import NewTaskImg from "/assert/dashboard/sidebar/new-task-pluse.png";
import DownloadImg from "/assert/dashboard/sidebar/downlaod.png";
import { useDispatch, useSelector } from "react-redux";
import { updateCredantials } from "@/featured/todoHandlerSlice";
import { logout } from "@/featured/authSlice";
import { signOut } from "next-auth/react";

function Sidebar() {
   const name = useSelector(
     (state) => state.auth.userData?.fullName || "Joe Gardner"
   );
   const dispatch = useDispatch();

   function capitalizeWords(str) {
     return str
       .split(" ")
       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
       .join(" ");
   }


   const btnEventHandler = (e) => {
     e.preventDefault();
     const isCreateTodo = true;
     const statusTodo = e.target.dataset.status ?? "";
     try {
       dispatch(updateCredantials({ statusTodo, isCreateTodo }));
     } catch (error) {
       console.log(error);
     }
   };

   const logOutHandler = () => {
    // dispatch(logout());
    signOut();
   }


  return (
    <aside className="fixed top-0 left-0 bottom-0 py-3 px-4 max-w-md w-[260px] bg-sidebar-gb flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Image
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              width={80}
              height={80}
              className="object-cover object-top w-10 h-10 rounded-xl"
              alt="avatar"
            />
            <span className="text-2xl font-medium text-black">
              {capitalizeWords(name)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Image src={Notification} alt="notification" />
              <Image src={UpdateStatusImage} alt="update status" />
              <Image src={MoreInfoImg} alt="more info" />
            </div>
            <button
              className="p-2 bg-active-bg rounded-md px-2"
              type="button"
              onClick={logOutHandler}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 p-2 text-lg rounded-md border--btn bg-active-bg">
              <Image src={HomeImg} alt="Home" />
              <p>Home</p>
            </div>
            <div className="flex items-center gap-3 p-2 text-lg rounded-md">
              <Image src={BoardImg} alt="Board" />
              <p>Boards</p>
            </div>
            <div className="flex items-center gap-3 p-2 text-lg rounded-md">
              <Image src={SettingImg} alt="Setting" />
              <p>Setting</p>
            </div>
            <div className="flex items-center gap-3 p-2 text-lg rounded-md">
              <Image src={TeamImg} alt="Teams" />
              <p>Teams</p>
            </div>
            <div className="flex items-center gap-3 p-2 text-lg rounded-md">
              <Image src={AnalyticsImg} alt="Analytics" />
              <p>Analytics</p>
            </div>
          </div>
          <button
            className="create-task outline-none flex bg-bg-sub-btn text-white p-2 items-center justify-center gap-2 rounded-md"
            type="submit"
            data-status=""
            onClick={btnEventHandler}
          >
            Create new task
            <Image src={NewTaskImg} alt="new task" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 p-2 text-lg rounded-md border--btn bg-active-bg">
        <Image
          className="align-middle"
          src={DownloadImg}
          alt="Download image"
        />
        <div className="align-middle">
          <p className="font-semibold">Download the app</p>
          <p className="text-sm tracking-tight">Get the full experience</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
