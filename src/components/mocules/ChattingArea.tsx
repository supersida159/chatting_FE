'use client'
import { FC, useState, useEffect, ChangeEvent, AnchorHTMLAttributes } from "react";
import FriendBox from "./FriendChatbox";
import SearchBox from "../Atom/searchbox/searchbox";
import { fetchWithToken } from "@/api/authwdata";
import { useRouter } from "next/navigation";
import Inputpage from "../Atom/Inputs/InputText";
import { BeakerIcon } from '@heroicons/react/24/solid'
import Button from "@/components/Atom/Button/Button";
import { useGlobalContext } from "@/context/store";

const ChatArea: FC = () => {
  const {chatSend,setChatSend,chatReceive,setChatReceive }= useGlobalContext();

  const [inputText, setInputText] = useState('');
  const handleButtonClick = () => {
    // Handle the button click action
    console.log('Read text: ' + inputText);
    setChatSend(inputText);
    setInputText('');
    console.log("Entered");
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.target.value);
  
  }

  return (
    <div className="h-full">
        <div className="h-[calc(100%_-_50px)] w-full bg-gray-200">{chatSend}</div>
        <div className=" w-full  flex flex-row">
            <Inputpage onChange={handleOnChange} value={inputText} onKeyDown={(e) => (e.key === 'Enter' ) ? (handleButtonClick()) : console.log("status:",e.key === 'Enter')}/>
            <Button className="w-36" onClick={handleButtonClick}>
              <BeakerIcon className="h-6 w-6 text-blue-500"/>
            </Button>
        </div>
    </div>

  );
};

export default ChatArea;
