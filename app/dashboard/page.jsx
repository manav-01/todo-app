"use client"
import Main from "@/pages/main";
import store from "@/store/store";
import { Provider } from "react-redux";


export default function Dashboard() { 
    return (
      <div className="bg-active-bg2 min-h-dvh w-full">
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
}