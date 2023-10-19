import Leftcomponent from '@/components/mocules/Left'
import Navbar from '@/components/mocules/Navbar'
import ChatArea from '@/components/mocules/ChattingArea'

import Image from 'next/image'
import { useRouter } from 'next/router'



export default function Home() {
  return (
    <div className='h-full flex flex-col'>
      <Navbar />
     <div className='flex flex-row flex-1'>
      <div className='w-1/3'>
         <Leftcomponent  />
        </div>
      <div className='flex-1 '>
        <ChatArea></ChatArea>
      </div>
     </div>
        
    </div>
  )
}
