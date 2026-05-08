import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

  // Case1: run on every render 
  useEffect(() => {
    alert("Hey I will run in every render")
  })

  // Case2: run only on first render 
  useEffect(() => {
    alert("Hey Welcome to my page. This is the first render")
  }, [])

  // Case3: run only when certain values change
  useEffect(() => {
    alert("Hey I am running because the color was changed")
  }, [color])

  // Example of cleanup Function
  
  useEffect(() => {
    alert("Hey WelCome to my page. This is the first render of app.jsx")

    return () => {
      alert("Component was unmounted")
    }
  }, [])

  return (
    <div>
      I am Navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
