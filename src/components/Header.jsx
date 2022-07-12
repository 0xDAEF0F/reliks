import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

import { useMoralis } from 'react-moralis'

import ProfileDropdownMenu from './ProfileDropdownMenu'
import MobileMenu from './MobileMenu'

function Header() {
  const [top, setTop] = useState(true)
  const { theme, setTheme } = useTheme()
  const { user, authenticate, isAuthenticated } = useMoralis()

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in to DApp' })
        .then(function (user) {
          console.log('logged in user:', user)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    console.log('user authenticated', user)
  }

  return (
    <header
      className={`fixed w-full z-10 md:bg-opacity-90 ${
        !top &&
        'bg-light-violet1 dark:bg-darkMode-violet1 backdrop-blur-sm shadow-lg dark:bg-opacity-90 dark:shadow-sm dark:shadow-zinc-700'
      }`}>
      <div className='max-w-6xl mx-auto px-5 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div className='flex-shrink-0 mr-4'>
            {/* Logo */}
            <Link href='/' className='block' aria-label='Cruip'>
              <a>Logo</a>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className='hidden md:flex md:flex-grow'>
            <ul className='flex flex-grow flex-wrap items-center justify-end space-x-10'>
              <Link href=''>
                <a className='font-semibold text-black dark:text-white opacity-70 hover:opacity-100 transition duration-100'>
                  Explore
                </a>
              </Link>

              <Link href=''>
                <a className='font-semibold text-black dark:text-white opacity-70 hover:opacity-100 transition duration-100'>
                  Stats
                </a>
              </Link>
              <Link href=''>
                <a className='font-semibold text-black dark:text-white opacity-70 hover:opacity-100 transition duration-100'>
                  About us
                </a>
              </Link>

              {!isAuthenticated && !user?.getUsername() ? (
                <button
                  className='font-semibold text-black dark:text-white opacity-70 hover:opacity-100 transition duration-100'
                  onClick={() =>
                    setTheme(theme === 'light' ? 'dark' : 'light')
                  }>
                  {theme === 'light' ? (
                    <HiOutlineMoon size={20} />
                  ) : (
                    <HiOutlineSun size={20} />
                  )}
                </button>
              ) : null}
            </ul>
            {!isAuthenticated && !user?.getUsername() ? (
              <ul className='flex flex-grow justify-end flex-wrap items-center'>
                <li>
                  <button
                    onClick={() => login()}
                    className='text-white bg-mauve px-5 py-3'>
                    Sign In
                  </button>
                </li>
              </ul>
            ) : (
              <div className='flex items-center flex-grow justify-end flex-wrap'>
                <ProfileDropdownMenu />
              </div>
            )}
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
