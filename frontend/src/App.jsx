import { Home } from "./pages/Home"
import { LogIn,SignUp } from "./pages/Auth"
import {Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  )
}
