import Leftcomponent from '@/components/mocules/Left'
import Navbar from '@/components/mocules/Navbar'

import Image from 'next/image'
import { useRouter } from 'next/router'



export default function Home() {
  return (
    <div className='h-full flex flex-col'>
      <Navbar />
      <div className='w-96'>
          <Leftcomponent  />
          </div>
    </div>
  )
}
