import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setcards] = useState([])

  const fetchData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    data = await data.json()
    setcards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
    <Navbar/>
      <div className="container">
        {cards.map((card)=>{
          return <div key={card.id} className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: Userid: {card.userid}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
