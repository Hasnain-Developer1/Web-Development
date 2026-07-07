"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSearchParams } from 'next/navigation'

const Generate = () => {

    const searchparams = useSearchParams()

    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchparams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i === index) {
                    return { link, linktext }
                } else {
                    return item
                }
            })

        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }


    const submitLinks = async () => {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        })

        console.log(raw)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        const r = await fetch('/api/add', requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
            setLinks([{ link: '', linktext: '' }])
            setpic('')
            sethandle('')
        } else {
            toast.error(result.message)
        }
    }


    return (
        <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-2'>
            <div className="col1 flex justify-center items-center flex-col text-gray-900 mt-36 ml-32">
                <div className="flex flex-col gap-5 my-8">
                    <h1 className='font-bold text-4xl'>Create Your Bittree</h1>
                    <div className="item">
                        <h2 className="font-semibold text-2xl">Step 1: Claim your hanlde</h2>
                        <div className="mx-4">
                            <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='bg-white px-4 py-2 my-2 focus:outline-pink-500 rounded-3xl' type="text" placeholder='Choose a handle' name="" id="" />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
                        {links && links.map((item, index) => {
                            return <div key={index} className='mx-4'>
                                <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className='px-4 py-2 mx-2 my-2 bg-white focus:outline-pink-500 rounded-full'
                                    type="text" placeholder='Enter link' />
                                <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className='px-4 py-2 mx-2 my-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link text' />
                            </div>
                        })}

                        <button onClick={() => addLink()} className='p-5 py-2 mx-0 bg-slate-900 text-white font-bold rounded-3xl cursor-pointer'>+ Add Link</button>
                    </div>
                    <div className="item">
                        <h2 className="font-semibold text-2xl">Step3: Add a Picture and Description</h2>
                        <div className="mx-4 flex flex-col">
                            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl' type="text" placeholder='Enter link to your picture' name="" id="" />
                            <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl' type="text" placeholder='Enter Description' name="" id="" />
                            <button disabled={pic === "" || handle === "" || links.some(item => !item.link || !item.linktext)} onClick={() => { submitLinks() }} className='p-5 py-2 mx-0 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl cursor-pointer disabled:bg-slate-500'>Create Your BitTree</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#E9C0E9] mt-20">
                <Image className='h-full object-contain ml-40' src="/generate.png" alt="Generate your Links" width={500} height={500} />
                <ToastContainer />
            </div>
        </div>
    )
}

export default Generate