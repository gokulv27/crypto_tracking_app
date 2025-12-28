'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="header">
      <div className="container inner">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={132} height={40} />
        </Link>
        <nav>
          <Link
            href="/"
            className={cn('nav-link', {
              'is-active': pathname === '/',
              'is-home': true,
            })}
          >
            {' '}
            Home{' '}
          </Link>
          <p>search</p>
          <Link
            href="/coins"
            className={cn('nav-link', { 'is-active': pathname === '/coins', 'is-coins': true })}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
