import { Home } from "./pages/Home"
import { LogIn,SignUp } from "./pages/Auth"
import {Routes,Route, Navigate} from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import { Chatpage } from './pages/Chatpage'
import { useEffect, useState } from "react"
import {jwtDecode} from 'jwt-decode';

export default function App() {
  const [authStatus,setAuthStatus] = useState(false);
  useEffect(() => {
    const authStatusHandler = () => {
      const token = localStorage.getItem('chat-app-token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log(decoded);
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
        <Route path='/' element={authStatus ? <Home /> : <Navigate to='/login' />}/>
        <Route path='/login' element={authStatus ? <Navigate to='/' /> : <LogIn />}/>
        <Route path='/signup' element={authStatus ? <Navigate to='/' /> : <SignUp />}/>
        <Route path="/chat" element={<Chatpage />}/>
      </Routes>
      <Toaster />
    </div>
  )
}
