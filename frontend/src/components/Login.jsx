import { Link, useNavigate } from "react-router-dom";
import { MdMailOutline } from "react-icons/md";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Spinner } from "./Spinner";



const Login = () => {
  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false)
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)

  const loginHandler = () => {
    setLoading(true)
    axios.post(`${import.meta.env.VITE_API_URL}/login`,{email,password})
    .then((response) => {
      console.log(response.data)
      navigate('/')
      setLoading(false)
    })
    .catch((error) => {
      toast.error(error.message)
      setLoading(false)
    })
  }

  return (
    <div className="flex justify-center items-center h-screen font-[sans-serif] text-[#333] p-4">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold">Log in</h3>
          </div>
          <div>
            <div className="relative flex items-center">
              <input name="email" type="text" required
                className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                <p className="absolute right-2 font-bold"><MdMailOutline /></p>
            </div>
          </div>
          <div className="mt-8">
            <div className="relative flex items-center">
              <input name="password" type={`${showPassword ? 'text' : 'password'}`} required
                className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
              <button className="absolute right-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</button>
            </div>
          </div>
          <div className="mt-10 ">
            <button type="button"
              onClick={loginHandler}
              className="py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#333] hover:bg-[#222] focus:outline-none">
              {loading ? <Spinner />: 'Log in'}
            </button>
            <p className="text-sm text-center mt-6">Dont have an account <Link to='/signup'
              className="font-semibold hover:underline ml-1 whitespace-nowrap">Signup here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
