import { useRef } from 'react'


const UseRefHook = () => {

    const inputRef = useRef(null)

    const onclick = () => {
     inputRef.current.value = "hello"
    }
    return (
        <div>
      <h1>search</h1>
      <input type="text" placeholder="search" ref={inputRef}/>
      <button onClick={onclick}>Click me</button>
        </div>
    )
}

export default UseRefHook