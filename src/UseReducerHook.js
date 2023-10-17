import { useState, useReducer } from "react"


const UseReducerHook = () => {
     
const reducer = (state, action) => {
    switch(action.type){
       case "INCREMENT" :
         return {count: state.count +1, showText: state.showText}
        case "toggleText" :
            return {count: state.count, showText: !state.showText}
        default :
        return state
    }
}

const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true
})

const clickCount = () =>{
    // const newValue = event.target.value // both way you can write
    dispatch({type: "INCREMENT"})
    dispatch({type: "toggleText"})
}

    return(
        <div>
            <p>{state.count}</p>
          <button onClick={clickCount}>Click me</button>
         {state.showText && <p>show text</p>}
         
        </div>
    )
}

export default UseReducerHook