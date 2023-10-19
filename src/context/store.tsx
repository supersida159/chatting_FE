
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";


interface ContextProps {
    chattingId: number,
    setChattingId: Dispatch<SetStateAction<number>>,
    chatSend: string,
    setChatSend: Dispatch<SetStateAction<string>>,
    chatReceive: string,
    setChatReceive: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    chattingId: 0,
    setChattingId: (): number => 0,
    chatSend: '',
    setChatSend: (): string => '',
    chatReceive: '',
    setChatReceive: (): string => ''
})

export const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
    const [chattingId, setChattingId] = useState(0);
    const [chatSend, setChatSend] = useState<string>('');

    const [chatReceive, setChatReceive] = useState<string>('');
    
    return (
        <GlobalContext.Provider value={{ chattingId: chattingId, setChattingId: setChattingId, chatSend: chatSend, setChatSend: setChatSend, chatReceive: chatReceive, setChatReceive: setChatReceive}}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);