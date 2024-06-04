import Login from "../components/Login"
import Signup from '../components/Signup'
export const Auth = () => {
  return (
    <div>
      This is Auth Page
    </div>
  )
}

export const LogIn = () => {
  return (
  <>
    <div>
      <Login />
    </div>
  </>
  )
}

export const SignUp = () => {
  return (
  <>
    <div>
      <Signup />
    </div>
  </>
  )
}