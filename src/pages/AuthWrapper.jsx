import { useAuth0 } from "@auth0/auth0-react"
import spinner from '../assets/spinner-light.gif'

const AuthWrapper = ({children}) => {
  const {isLoading, error} = useAuth0()

  if(isLoading) {
    return <div className="min-h-[100vh] flex justify-center items-center">
          <img src={spinner} className="" />
    </div>
  }

  if(error) {
    return <h1 className="text-center text-3xl font-bold">{error.message}</h1>
  }

  return children

}

export default AuthWrapper