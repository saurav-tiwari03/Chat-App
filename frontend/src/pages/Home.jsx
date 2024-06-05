/* eslint-disable react/prop-types */
import { ChatBox } from '../components/ChatBox';
import { PastChats } from '../components/PastChats';
import { Navbar } from './../components/Navbar'

export const Home = ({data}) => {

  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar data={data}/>
      <div>
        <ChatBox />
      </div>
      <div>
        <PastChats />
      </div>
    </div>
  )
}

