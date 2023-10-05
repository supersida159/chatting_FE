"use client"
import { type } from "os";
import { ChangeEvent, FC, useState } from "react";
import FriendBox from "./FriendChatbox";
import SearchBox from "../Atom/searchbox/searchbox";
import { fetchWithToken } from "@/api/authwdata";
import { METHODS } from "http";


const Leftcomponent: FC = () =>{
    const [current,setCurrent]=useState<string>("")
    const [count,setcount]=useState(0)
    const FriendData= GetFriendList()
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCurrent(e.target.value);
        setcount(count+1)
      };
    
    return <>
    <div className=" flex-1 py-3 px-2 bg-slate-500" >
        <label htmlFor="" className="left-0 font-bold text-2xl">Chat</label>
        <SearchBox count={0} value={""} onchangefunc={handleOnChange}/>
        <label htmlFor="">{"counter:"+count +"  current:"+current}</label>
        <div className="overflow-auto h-[calc(100vh-180px)]">
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        <FriendBox user={""} message={""} lastuser={""}/>
        </div>
    </div>
    </>
}

export default Leftcomponent

 async function GetFriendList(){
    try{
        const FriendData = await fetchWithToken("http://localhost:8080/Friend",
            {
                method: "POST",
                body: JSON.stringify({ Request: "Friend" }),
            }
        )
        return FriendData
    }
    catch(error){
        console.log("error to when fetch data:",error)
    }
}