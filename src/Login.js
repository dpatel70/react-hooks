import {AppContext} from './Context'
import { useContext } from 'react'

const Login = () => {
    
    const {setUserName} = useContext(AppContext)
    const change = (event) => {

     setUserName(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={change}/>
        </div>
    )
}
export default Login