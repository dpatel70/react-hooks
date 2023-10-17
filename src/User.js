import {AppContext} from './Context'
import { useContext } from 'react'

const User = () => {

    const {userName} = useContext(AppContext)

    return (
        <div>
            User: {userName}
        </div>
    )
}

export default User