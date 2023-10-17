import { useEffect, useState } from "react"
import axios from "axios"

const EffectHook = () => {

    const [data, setData] = useState("")

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => setData(res.data[0].email))
        console.log("api was called");
        
        // .then(a => console.log(a.data))
    }, [])

    return (
        <div>
           <li> {data}</li>
      
        </div>
    )
}

export default EffectHook