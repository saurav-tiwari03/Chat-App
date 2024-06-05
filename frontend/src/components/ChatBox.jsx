import { useState } from "react";
import toast from 'react-hot-toast'
import { Spinner } from "./Spinner";

export const ChatBox = () => {
  const [id, setId] = useState('');
  const [loading,setLoading] = useState(false);

  const submitHandler = () => {
    setLoading(true);
    let pastChatIds = JSON.parse(localStorage.getItem('Past-ChatIds')) || [];
    if(id === ''){
      toast.error('Enter Valid Id')
      console.log(pastChatIds)
      setLoading(false)
      return;
    }
    else {
      pastChatIds.push(id);
      localStorage.setItem('Past-ChatIds', JSON.stringify(pastChatIds));
      console.log(pastChatIds);
      setLoading(false)
    }
  };

  return (
    <div>
      <div className="border-2 border-black">
        <div>
          <p className="font-Poetsen text-4xl bg-indigo-500 text-white px-4 py-2">Enter UserId</p>
        </div>
        <div className="flex items-center justify-center my-4">
          <input
            type="text"
            className="outline-none border-b-2 pl-2 font-Poppins border-indigo-500 rounded-md h-[30px] bg-[#CEAB93] text-white"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="text-white bg-indigo-500 px-6 py-2 rounded-md hover:rounded-2xl duration-300 font-Poppins uppercase"
            onClick={submitHandler}
          >
            {loading ? <Spinner /> : 'chat'}
          </button>
        </div>
      </div>
    </div>
  );
};
