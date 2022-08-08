import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { decrement, increment } from "../Redux/action"

 export const Counter=()=>{
    const counter = useSelector((state)=>state.count)
    // console.log("count",count)
    const dispatch = useDispatch()
    // console.log(dispatch)
      return(
        <>
        <h1>{counter}</h1>
        <button onClick={()=> dispatch(increment(5)) } > INCREMENT </button>
        <button onClick={()=> dispatch(decrement(10)) } > DECREMENT </button>
        </>
      )
 } 
