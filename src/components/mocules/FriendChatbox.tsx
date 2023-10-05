import { type } from "os";
import { FC, useState } from "react";

interface FriendBoxVar{
    user: string;
    message: string;
    lastuser: string;
}

const FriendBox: FC<FriendBoxVar> = ({user,message,lastuser}) =>{

    return <>
        <div className="w-full h-64px hover:bg-slate-50 rounded-lg items-center justify-center ">
            <div className="w-16 h-16 felx place-content-center">
                <img src="https://th.bing.com/th/id/R.8c4568d3df546cf09041b1773adcae8f?rik=vUsU2aQPeJFoUA&pid=ImgRaw&r=0" alt="dog" className="w-14 h-14 px-1 py-1 rounded-full "/>
            </div>
      {user+message+lastuser}
    </div>
    </>
}

export default FriendBox