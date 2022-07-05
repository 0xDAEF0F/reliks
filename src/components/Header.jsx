import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ModalSignUp from '../components/ModalSignUp'
import { useTheme } from 'next-themes'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

function Header() {
  const [top, setTop] = useState(true)
  const { theme, setTheme } = useTheme()

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-10 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top &&
        'bg-white dark:bg-black backdrop-blur-sm shadow-lg dark:bg-opacity-90 dark:shadow-sm dark:shadow-zinc-700'
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
                <a>About us</a>
              </Link>

              <Link href=''>
                <a>Blog</a>
              </Link>
              <Link href=''>
                <a>Tutorials</a>
              </Link>
              <button
                className='hover:bg-gray-50 dark:hover:bg-zinc-900 px-1 py-1 border dark:border-zinc-800 rounded-md'
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? (
                  <IoMoonOutline className='text-black' size={20} />
                ) : (
                  <IoSunnyOutline className='text-white' size={20} />
                )}
              </button>
            </ul>
            <ul className='flex flex-grow justify-end flex-wrap items-center'>
              <li>
                <Link href='/signin'>
                  <a className='font-medium text-gray-600 hover:text-gray-900 flex items-center transition duration-150 ease-in-out'>
                    Sign in
                  </a>
                </Link>
              </li>
              <li>
                <ModalSignUp />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
