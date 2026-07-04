import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-500 text-white sticky top-0 z-10'>
      <div className="mycontainer flex justify-between px-4 items-center h-14 py-5">

        <div className="logo font-bold text-white text-2xl">

          <span className='text-green-700'>&lt;</span>
          <span>Pass</span>
          <span className='text-green-700'>OP/&gt;</span>


        </div>

        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul> */}

        <button className='text-white bg-black my-5 px-1 rounded-full flex justify-center items-center cursor-pointer ring-white ring-1'>
          <img width={50} className='invert w-10' src="/icons/GitHub.png" alt="GitHub Logo" />
          <span className="font-bold">GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar