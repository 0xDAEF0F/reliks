import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useMoralis } from 'react-moralis'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import MobileMenu from './MobileMenu'
import toast from 'react-hot-toast'
import to from 'await-to-js'

function Header() {
  const [top, setTop] = useState(true)
  const { theme, setTheme } = useTheme()
  const { authenticate, isAuthenticated } = useMoralis()

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  const login = async () => {
    if (isAuthenticated) {
      toast.success('Already Signed In.')
      return
    }
    const [, usr] = await to(
      authenticate({ signingMessage: 'Please Sign Message to Log In.' })
    )
    if (usr) toast.success('Succesfully Signed In.')
    if (!usr) toast.error(`Could not sign in. Please try again.`)
  }

  return (
    <header
      className={`fixed z-20 w-full md:bg-opacity-90 ${
        !top &&
        'dark:shadow-zinc-700 bg-light-violet1 shadow-lg backdrop-blur-sm dark:bg-darkMode-violet1 dark:bg-opacity-90 dark:shadow-sm'
      }`}>
      <div className='mx-auto max-w-6xl px-5 sm:px-6'>
        <div className='flex h-16 items-center justify-between md:h-20'>
          {/* App name & logo */}
          <div className='mr-4 flex-shrink-0'>
            <Link href='/' className='block' aria-label='Cruip'>
              <a>Logo</a>
            </Link>
          </div>
          {/* Site navigation */}
          <nav className='hidden md:flex md:flex-grow'>
            <ul className='flex flex-grow flex-wrap items-center justify-end space-x-10'>
              {/* TEMPORARY LINKS*/}
              <Link href='explore'>
                <a className='font-semibold text-black opacity-70 hover:opacity-100 transition duration-100 dark:text-white'>
                  Explore
                </a>
              </Link>
              <Link href=''>
                <a className='font-semibold text-black opacity-70 transition duration-100 hover:opacity-100 dark:text-white'>
                  Stats
                </a>
              </Link>
              <Link href=''>
                <a className='font-semibold text-black opacity-70 transition duration-100 hover:opacity-100 dark:text-white'>
                  About us
                </a>
              </Link>
              {/* END TEMPORARY LINKS */}
              {!isAuthenticated ? (
                <button
                  className='font-semibold text-black opacity-70 transition duration-100 hover:opacity-100 dark:text-white'
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                  <HiOutlineSun className='dark:fill-white' size={20} />
                </button>
              ) : null}
            </ul>
            {isAuthenticated ? (
              <div className='flex flex-grow flex-wrap items-center justify-end'>
                <ProfileDropdownMenu />
              </div>
            ) : (
              <ul className='flex flex-grow flex-wrap items-center justify-end'>
                <li>
                  <button
                    onClick={() => login()}
                    className='bg-mauve px-5 py-3 text-white'>
                    Connect Wallet
                  </button>
                </li>
              </ul>
            )}
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
