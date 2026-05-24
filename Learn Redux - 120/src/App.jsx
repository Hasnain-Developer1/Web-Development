import { useState } from 'react'
import Navbar from './components/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, multiply } from './redux/counter/counterSlice.js' 

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      Currently count is {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply(2))}>*</button>
    </div>
    </>
  )
}

export default App
