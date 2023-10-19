'use client'
import { FC, useState, useEffect, ChangeEvent, AnchorHTMLAttributes } from "react";
import FriendBox from "./FriendChatbox";
import SearchBox from "../Atom/searchbox/searchbox";
import { fetchWithToken } from "@/api/authwdata";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/store";

export const x=0
const Leftcomponent: FC = () => {
    interface ChatMessage {
        ChattingID: number;
        Sender: number;
        Receiver: number;
        Content: string;
        Sendtime: string;
        UserName: string;
      }

  const [current, setCurrent] = useState<string>("");
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState<ChatMessage[]>([]); // State to store the list of friends
  const router = useRouter();
  const {chattingId,setChattingId }= useGlobalContext();
  

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCurrent(e.target.value);
    setCount(count + 1);
  };
  
  const handlefocus = (key: number) => {
    setChattingId(key);
  }
  console.log("focus",chattingId)

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "Number": 1 }),
    };

      try {
        const responseData = await fetchWithToken("http://localhost:8080/Private/HistoryFirst", options);
        console.log("responseData token:",responseData.token)
        if (responseData.token === 'invalid') {
          console.log("responseData token2:",responseData.token)
          router.push('/Login');
        }else{
          setFriends(responseData); // Store the response data in the state

        }
      } catch (error) {
        console.error("Error when fetching data:", error);
      }
    }

    fetchData(); // Call the asynchronous function to fetch chat history

  }, []); // The empty dependency array ensures this effect runs only once on component mount
  
  return (
    <div className="flex-1 py-3 px-2 bg-slate-500">
      <label htmlFor="" className="left-0 font-bold text-2xl">Chat</label>
      <SearchBox count={0} value={""} onchangefunc={handleOnChange} />
      <label htmlFor="">{"counter:" + count + " current:" + current}</label>
      <div className="overflow-auto h-[calc(100vh-180px)]">
      {friends.map((friend) => (
          <div  className={`${friend.ChattingID === chattingId ? "bg-red-500" : ""}`}
          key={friend.ChattingID} 
          onClick={() => handlefocus(friend.ChattingID)}>
            <FriendBox user={friend.UserName} message={friend.Content} lastuser={""} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leftcomponent;
