/* eslint-disable react/prop-types */
import { FaPaperPlane } from "react-icons/fa6";
import axios from 'axios'
import { useState } from "react";
import toast from 'react-hot-toast'
import { Spinner } from './Spinner'
import { Text } from "./Text";

export const Conversation = ({ name }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const chatId = '66603d94df7650ff05cba7e5';
  const username = name;

  const sendMessageHandler = () => {
    console.log(message);
    setLoading(true);
    axios.post('http://localhost:4000/api/v1/chats/add', { chatId, message, username })
      .then((response) => {
        console.log(response);
        toast.success('Message sent successfully');
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Failed to send message');
        setLoading(false);
      });
  };

  return (
    <div className="border-2 items-center flex flex-col justify-center">
      <h1 className="font-Poetsen text-3xl text-center w-[500px] bg-indigo-500 text-white px-4 py-2 uppercase">{name}</h1>
      <div className="h-[500px] w-[500px] flex flex-col justify-between items-center py-4">
        <div>
          <Text />
        </div>
        <div className="flex items-center gap-2">
          <input
            onChange={(e) => setMessage(e.target.value)}
            className="h-[40px] w-[300px] rounded-lg pl-4 outline-none"
            type="text"
            placeholder="Message"
          />
          <button
            onClick={sendMessageHandler}
            className="text-white bg-indigo-500 w-[40px] h-[40px] flex items-center justify-center rounded-xl"
          >
            {loading ? <Spinner /> : <FaPaperPlane />}
          </button>
        </div>
      </div>
    </div>
  );
};
