"use client"
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")


  const createTree = () => {
  
    router.push(`/generate?handle=${text}`)
  }
  
  return (
    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2 pb-10">

        <div className=" flex justify-center flex-col  ml-[10vw] gap-3 mt-46">
          <p className="text-yellow-300 font-bold text-6xl ">EveryThing You</p>
          <p className="text-yellow-300 font-bold text-6xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-6xl">Simple link in bio.</p>
          <p className="text-yellow-300 text-xl my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

          <div className="input flex gap-2">
            <input value={text} onChange={(e)=>setText(e.target.value)} className="px-2 py-2 focus:outline-green-800 rounded-md bg-white" type="text" placeholder="Enter Your handle" />
            <button onClick={()=>createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-bold cursor-pointer hover:scale-105">Claim Your Bitree</button>
          </div>

        </div>
        <div className=" flex items-center justify-center flex-col  mr-[10vw]">
          <Image src="/home.png" alt="homepage Image" width={500} height={500} />
        </div>

      </section>
      <section className="bg-red-700 min-h-screen">

      </section>
    </main>
  );
}
