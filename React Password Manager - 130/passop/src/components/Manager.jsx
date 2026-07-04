import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        let passwordArray;
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('Copied to clipboard', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                pauseOnFocusLoss: false,
                draggable: true,
                theme: 'light',
                transition: Bounce,
            });
        } catch {
            toast.error('Unable to copy', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                pauseOnFocusLoss: false,
                draggable: true,
                theme: 'light',
                transition: Bounce,
            });
        }
    }



    const showpassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("icons/EyeCross.png")) {
            ref.current.src = "icons/Eye.png"
            passwordRef.current.type = "text"
        }
        else {
            ref.current.src = "icons/EyeCross.png"
            passwordRef.current.type = "password"
        }
    }

    const savepassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            console.log(form)
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            setform({ site: "", username: "", password: "" })
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            toast.success('Password Saved', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                pauseOnFocusLoss: false,
                draggable: true,
                theme: 'light',
                transition: Bounce,
            });
        }
        else {
            toast.error('Password not Saved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }
    const deletePassword = (id) => {
        console.log("Deleting Password with ID", id)
        let c = confirm("Do You Really want to delete this Password?")
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }
        toast.success('Password Deleted Successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: 'light',
            transition: Bounce,
        });
    }
    const editPassword = (id) => {
        console.log("Editing Password with ID", id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Bounce}
            />
            <div className="relative min-h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">

                <div className="p-3 md:mycontainer min-h-[89vh]">
                    <h1 className='text-4xl font-bold text-center'>
                        <span className='text-green-700'>&lt;</span>
                        <span className='text-black'>Pass</span>
                        <span className='text-green-700'>OP/&gt;</span>
                    </h1>
                    <p className='text-white text-center text-lg '>Your Own Password Manager</p>
                    <div className=' flex flex-col p-4 text-black gap-8 items-center'>
                        <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full px-4 py-1 text-black' type="text" name="site" id="site" />
                        <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                            <input value={form.username} onChange={handleChange} placeholder='Enter UserName' className='rounded-full border border-green-500 w-full px-4 py-1 text-black' type="text" name="username" id="username" />
                            <div className="relative flex items-center">
                                <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full px-4 py-1 text-black' type="password" name="password" id="password" />
                                <span className='absolute right-1 top-{2px} cursor-pointer' onClick={showpassword}>
                                    <img ref={ref} className='p-1' width={30} src="/icons/Eye.png" alt="eye" />
                                </span>
                            </div>
                        </div>
                        <button type="button" onClick={savepassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full py-2 px-8 w-fit  ring-black ring-1'>
                            <lord-icon
                                src="https://cdn.lordicon.com/vjgknpfx.json"
                                trigger="hover"
                                colors="primary:#000000,secondary:#16a34a"
                                stroke="bold"
                                state="hover-swirl"
                                class="h-6 w-6">
                            </lord-icon>
                            Save</button>
                    </div>
                    <div className="passwords">
                        <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                        {passwordArray.length === 0 && <div>No Password to show</div>}
                        {passwordArray.length != 0 && <table className="w-full table-auto border-collapse overflow-hidden rounded-md mb-10">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='px-3 py-2 text-center'>Site</th>
                                    <th className='px-3 py-2 text-center'>UserName</th>
                                    <th className='px-3 py-2 text-center'>Password</th>
                                    <th className='px-3 py-2 text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-200'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='border border-white px-3 py-2'>
                                            <div className='flex items-center justify-between gap-2'>
                                                <a href={item.site} target='_blank' rel='noreferrer' className='text-green-800 underline break-all'>
                                                    {item.site}
                                                </a>
                                                <div className='size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon
                                                        style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border border-white px-3 py-2'>
                                            <div className='flex items-center justify-between gap-2'>
                                                <span className='break-all'>{item.username}</span>
                                                <div className='size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                    <lord-icon
                                                        style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border border-white px-3 py-2'>
                                            <div className='flex items-center justify-between gap-2'>
                                                <span className='break-all'>{item.password}</span>
                                                <div className='size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon
                                                        style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border border-white px-3 py-2 text-center '>
                                            <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    state="hover-line"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/jzinekkv.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>

                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default manager