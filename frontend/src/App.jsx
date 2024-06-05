import { Home } from "./pages/Home"
import { LogIn,SignUp } from "./pages/Auth"
import {Routes,Route, Navigate} from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import { Chatpage } from './pages/Chatpage'
import { useEffect, useState } from "react"
import {jwtDecode} from 'jwt-decode';

export default function App() {
  const [authStatus,setAuthStatus] = useState(false);
  const [data,setData] = useState();
  useEffect(() => {
    const authStatusHandler = () => {
      const token = localStorage.getItem('chat-app-token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setData(decoded.payLoad);
          setAuthStatus(true);
        } catch (error) {
          console.log(error);
          setAuthStatus(false); 
        }
      } else {
        console.log('Token not found');
        setAuthStatus(false); 
      }
    };
    authStatusHandler();
  }, []);
  return (
    <div>
      <Routes>
        <Route path='/' element={authStatus ? <Home data={data}/> : <Navigate to='/login' />}/>
        <Route path='/login' element={authStatus ? <Navigate to='/' /> : <LogIn />}/>
        <Route path='/signup' element={authStatus ? <Navigate to='/' /> : <SignUp />}/>
        <Route path="/chat" element={<Chatpage />}/>
      </Routes>
      <Toaster />
    </div>
  )
}
