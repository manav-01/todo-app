"use client"
import Main from "@/pages/main";
import store from "@/store/store";
import { Provider } from "react-redux";


export default function Dashboard() { 
    return (
        <div className= "bg-red-200 h-dvh w-full">
            <Provider store={store}>
            
            <Main/>
            </Provider>
        </div>

    );
}