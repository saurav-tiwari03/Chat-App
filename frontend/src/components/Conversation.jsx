/* eslint-disable react/prop-types */
import { FaPaperPlane } from "react-icons/fa6";

export const Conversation = ({name}) => {
  console.log(name)
  return (
    <div className="border-2 items-center flex flex-col justify-center">
      <h1 className="font-Poetsen text-3xl text-center w-[500px] bg-indigo-500 text-white px-4 py-2 uppercase">{name}</h1>
      <div className="h-[500px] w-[500px] flex flex-col justify-between items-center py-4">
          <div>
            <p>Display Chats</p>
          </div>
          <div className="flex items-center gap-2">
            <input className="h-[40px] w-[300px] rounded-lg pl-4 outline-none" type="text" placeholder="Message" />
            <button className="text-white bg-indigo-500 w-[40px] h-[40px] flex items-center justify-center rounded-xl"><FaPaperPlane /></button>
          </div>
      </div>
    </div>
  )
}
