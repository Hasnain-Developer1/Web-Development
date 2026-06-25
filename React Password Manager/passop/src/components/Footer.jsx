import React from 'react'

const Footer = () => {
    return (
        <div className='bg-purple-600 text-white flex flex-col justify-center items-center w-full'>
            <div className="logo font-bold text-black text-2xl ">
                <span className='text-green-700'>&lt;</span>
                <span>Pass</span>
                <span className='text-green-700'>OP/&gt;</span>
            </div>
            <div className="mt-auto flex justify-center items-center">
                Created with <img className=' w-7 m-1' src="/icons/Heart.png" alt="Heart" /> by HasnainMalik
            </div>
        </div>
    )
}

export default Footer