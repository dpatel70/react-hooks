import Login from "./Login"
import User from "./User"
import { useState, createContext } from 'react'


export const AppContext = createContext(null)

const Context = () => {


    const [userName, setUserName] = useState("")

    return (
        <AppContext.Provider value={{userName, setUserName}}>
            
            <Login />
            <User />
        </AppContext.Provider>
    )
}
export default Context