/* eslint-disable react/prop-types */
import { useState } from "react"
import { Spinner } from "./Spinner"
import { useNavigate } from "react-router-dom"

export const Navbar = ({data}) => {
  const [loginStatus,setLoginStatus] = useState(true)
  const [loading,setLoading] = useState(true)
  const navigate = useNavigate();
  const logOutHandler = () => {
    setLoading(false)
    setLoginStatus(!loginStatus)
    try {
      localStorage.removeItem('chat-app-token')
      navigate('/login')
      setLoading(true)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="text-center flex items-center">
      <p className='text-3xl md:text-5xl font-Poppins my-2 font-semibold'>Web Chat App</p>
      <div className="flex items-center justify-end absolute right-2 gap-2">
        <div className="">
          Hello {data.username}
        </div>
        <div onClick={logOutHandler} className='cursor-pointer w-[100px] bg-[#333] rounded-lg hover:bg-[#222] py-2.5 flex items-center justify-center'>
          <button  className=" text-sm font-semibold rounded-xl text-white ">
            {
              loading ? 
              (
                loginStatus ? 'Log out' : 'Log in'
              ) : <Spinner />
            }
          </button>
        </div>
      </div>
    </div>
  )
}
