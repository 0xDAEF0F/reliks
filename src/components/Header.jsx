import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ModalSignUp from '../components/ModalSignUp'
import { useTheme } from 'next-themes'
import { FaRegLightbulb, FaRegMoon } from 'react-icons/fa'

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
        !top && 'bg-white backdrop-blur-sm shadow-lg'
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
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? (
                  <FaRegLightbulb
                    className='text-gray-500 hover:text-white'
                    size={28}
                  />
                ) : (
                  <FaRegMoon
                    className='text-gray-500 hover:text-purple-500'
                    size={28}
                  />
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
                <div className='px-5 py-3 text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3'>
                  <ModalSignUp />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
