import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  return (
    <>
      <div>This is count {count}</div>
      <button onClick={()=>{setCount(566)}}>update Count</button>
    </>
  )
}

export default App
