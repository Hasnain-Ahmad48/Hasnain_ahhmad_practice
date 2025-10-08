import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterDisplay from "./CounterDisplay"
import CounterButton from "./CounterButton"
import Reset from "./Reset"

function App() {
  const [count, setCount] = useState(0)

  function increase(){setCount((count)=>count+1)}
  function decrease(){setCount((count)=>count-1)}
  function reset(){setCount(0)}

  return (
 <>
 <h1>simple counter app</h1>
 <CounterDisplay count={count} />
 <CounterButton increase={increase} decrease={decrease}/>
 <Reset reset={reset}/>
 </>
  )
}

export default App
