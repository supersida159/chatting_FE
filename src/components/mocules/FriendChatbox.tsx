import { type } from "os";
import { FC, useState } from "react";

interface FriendBoxVar{
    user: string;
    message: string;
    lastuser: string;
}

const FriendBox: FC<FriendBoxVar> = ({user,message,lastuser}) =>{

    return <>
        <div className=" h-64px hover:bg-slate-50 rounded-lg items-center flex flex-1">
            <div className="w-16 h-16 justify-start">
                <img src="https://th.bing.com/th/id/R.8c4568d3df546cf09041b1773adcae8f?rik=vUsU2aQPeJFoUA&pid=ImgRaw&r=0" alt="dog" className="w-14 h-14 px-1 py-1 rounded-full "/>
            </div>
            <div className="flex-col">
                <div><h1>{user}</h1></div>  
                <div><p>{message}:{lastuser}</p></div>
            </div>
    </div>
    </>
}

export default FriendBox