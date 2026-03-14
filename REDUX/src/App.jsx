import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { decrement, increment ,incrementByRand } from "./features/slice/counterSlice"

function App() {
  
  const value = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      
       <h1>{value}</h1>
       <button onClick={()=>{dispatch(increment())}}>Increment</button>
       <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
       <button onClick={()=>{dispatch(incrementByRand(10))}}>Increment by 10</button>
    </>
  )
}

export default App
