import FriendBox from '@/components/mocules/FriendChatbox'
import Navbar from '@/components/mocules/Navbar'
import Image from 'next/image'
import { useRouter } from 'next/router'



export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='w-1/3 bg-slate-500'>
      <FriendBox user='sdf' lastuser='d' message='2'/>
      </div>
    </div>
  )
}
