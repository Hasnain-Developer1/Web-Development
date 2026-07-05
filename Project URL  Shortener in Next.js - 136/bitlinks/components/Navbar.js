import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex items-center justify-between px-3 text-white'>
            <div className="logo font-bold text-2xl">
                
                <Link href="/" className="hover:text-purple-200 transition-colors">BitLinks</Link>
            </div>
            <ul className='flex justify-center gap-4 items-center'>
                <li><Link href="/" className="hover:text-purple-200 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-purple-200 transition-colors">About</Link></li>
                <li><Link href="/shorten" className="hover:text-purple-200 transition-colors">Shorten</Link></li>
                <li><Link href="/contact" className="hover:text-purple-200 transition-colors">Contact us</Link></li>
                <li className="flex gap-3">
                    <Link href="/shorten" className="rounded bg-white px-3 py-1 text-sm font-medium text-purple-700 hover:bg-purple-100 transition-colors cursor-pointer">Try Now</Link>
                    <Link href="/github" className="rounded border border-white px-3 py-1 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors cursor-pointer">GitHub</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar