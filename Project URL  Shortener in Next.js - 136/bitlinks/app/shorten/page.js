"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState('')
    const [generated, setGeneratedUrl] = useState('')

    const generate = async () => {
        if (!url.trim() || !shorturl.trim()) {
            alert('Please enter both the original URL and a short URL name.')
            return
        }

        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        const raw = JSON.stringify({
            url,
            shorturl,
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            const response = await fetch('/api/generate', requestOptions)
            const text = await response.text()
            const result = text ? JSON.parse(text) : {}

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong while generating the short URL.')
            }

            const host = process.env.NEXT_PUBLIC_HOST || window.location.origin
            setGeneratedUrl(`${host}/${shorturl}`)
            seturl('')
            setshorturl('')
            alert(result.message || 'URL generated successfully')
        } catch (error) {
            console.error(error)
            alert(error.message || 'Failed to generate short URL')
        }
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate Your Short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input
                    type='text'
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 bg-white rounded-md'
                    placeholder='Enter Your URLs'
                    onChange={e => { seturl(e.target.value) }}
                />

                <input
                    type='text'
                    value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 bg-white rounded-md'
                    placeholder='Enter Your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }}
                />

                <button
                    onClick={generate}
                    className='px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-purple-600 my-3 cursor-pointer'
                >
                    Generate
                </button>

                {generated && <> <span className='font-bold text-lg'>Your Link: </span><code><Link target="_blank" href={generated}>{generated}</Link> 
                </code></>}
            </div>

        </div>
    )
}

export default Shorten