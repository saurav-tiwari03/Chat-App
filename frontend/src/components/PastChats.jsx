/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'


export const PastChats = () => {
  const [pastChatIds, setPastChatIds] = useState([]);

  const getPastChats = () => {
    const chats = JSON.parse(localStorage.getItem('Past-ChatIds')) || [];
    setPastChatIds(chats);
  };

  useEffect(() => {
    getPastChats();
  }, []);

  const deleteHandler = (chatId) => {
    const updatedChats = pastChatIds.filter(id => id !== chatId);
    setPastChatIds(updatedChats);
    localStorage.setItem('Past-ChatIds', JSON.stringify(updatedChats));
    toast.success('Chat deleted successfully')
  };

  return (
    <div className="flex flex-col border-2 border-black mt-4 w-[300px] md:w-[375px]">
      <h1 className="text-2xl text-center font-Poetsen">Recent Chats</h1>
      {pastChatIds.length > 0 ? (
        pastChatIds.map((pastChatId, index) => (
          <Chat key={index} chatId={pastChatId} deleteHandler={deleteHandler} />
        ))
      ) : (
        <div className="items-center flex justify-center">
          <p className="text-2xl text-indigo-500  font-Poppins font-semibold">No Past Chats</p>
        </div>
      )}
    </div>
  );
};

const Chat = ({ chatId, deleteHandler }) => {
  const navigate = useNavigate();
  const chatEnterHandler = () => {
    console.log(chatId);
    navigate('/chat', { state: { chatId } }); 
  };

  return (
    <div className="my-1">
      <div className="flex items-center justify-between">
        <h2 className="bg-[#CEAB93] ml-2 h-[40px] w-[100px] rounded uppercase flex justify-center items-center">
          {chatId}
        </h2>
        <div className="items-center flex gap-2 justify-center">
          <button
            onClick={chatEnterHandler}
            className="text-white flex items-center bg-indigo-500 px-6 py-2 rounded-md hover:rounded-2xl duration-300 font-Poppins uppercase"
          >
            <span className="sm:flex hidden">Enter Chat</span> <FaPaperPlane className="flex sm:hidden"/>
          </button>
          <button 
            className="text-2xl text-indigo-500 hover:text-3xl w-[30px] duration-300" 
            onClick={() => deleteHandler(chatId)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
