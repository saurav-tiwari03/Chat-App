import { ChatBox } from '../components/ChatBox';
import { PastChats } from '../components/PastChats';

export const Home = () => {

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-3xl md:text-5xl font-Poppins my-2 font-semibold'>Web Chat App</p>
      <div>
        <ChatBox />
      </div>
      <div>
        <PastChats />
      </div>
    </div>
  )
}

