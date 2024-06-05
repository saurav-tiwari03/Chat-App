import axios from 'axios';
import { useEffect, useState } from 'react';

export const Text = () => {
  const chatId = '66603d94df7650ff05cba7e5';
  const [chats, setChats] = useState({});

  const getChatHandler = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/chats`, {
      params: { chatId }
    })
    .then((response) => {
        setChats(response.data.data.Chats);  
    })
    .catch((error) => {
      console.log('Error fetching chats:', error);
    });
  };

  useEffect(() => {
    getChatHandler();
  }, [chats]);

  return (
    <div className=''>
      {chats.length > 0 ? (
        chats.map((chat, index) => (
          <div key={index} className='flex gap-2 my-1 '>
            <p className='bg-indigo-500 rounded text-white px-4 py-1'>{chat.by} : </p>
            <p className=''>{chat.message}</p>
          </div>
        ))
      ) : (
        <p>No chats available.</p>
      )}
    </div>
  );
};
