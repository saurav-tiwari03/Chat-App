import axios from 'axios'
import { useState } from 'react'
import { ImSpinner } from "react-icons/im";


export const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataHandler = () => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/users`)
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='flex'>This Home Page</p>
      <button onClick={dataHandler} className='bg-indigo-500 text-white rounded p-4'>Get Users Data</button>
      <div className='flex items-center justify-center mt-4'>
        {
          loading ? 
          <Loader /> :
          (
            users.map((user) => (
              <p key={user._id}>{user.username}</p>
            ))
          )
        }
      </div>
    </div>
  )
}

const Loader = () => {
  return (
    <div className="bg-indigo-500 flex text-white rounded p-2 items-center gap-1" >
      <p className="animate-spin " >
        <ImSpinner/>
      </p>
      <p>
        Processing...
      </p>
    </div>
  )
}
