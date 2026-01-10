'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
 
export const Header = () => {
  const pathname=usePathname()
  return (
      <header>
        <div className='main-container inner'>
        <Link href="/">CryptoPulse</Link>
        <nav>
          <Link href="/" className={cn('nav-link', { 'is-active': pathname === '/', 'is-home': true })}>Home</Link>
          <p>search modal</p>
          <Link href="/coins" className={cn('nav-link', { 'is-active': pathname === '/coins' })}>All coins</Link>
        </nav>
            
    </div>
    </header>
  )
}

export default Header;