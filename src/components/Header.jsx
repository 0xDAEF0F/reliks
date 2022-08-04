import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { HiOutlineMoon } from 'react-icons/hi'
import { useMoralis } from 'react-moralis'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import MobileMenu from './MobileMenu'
import toast from 'react-hot-toast'
import to from 'await-to-js'
import { AiOutlineSearch } from 'react-icons/ai'

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
      <div className='mx-auto max-w-6xl px-6'>
        <div className='flex h-16 items-center justify-between md:h-20'>
          {/* App name & logo */}
          <Link href='/' className='flex items-center'>
            <a className='flex-shrink-0'>Reliqs</a>
          </Link>
          <div className='mx-5 w-full md:mx-10'>
            <label htmlFor='search' className='sr-only'>
              Search
            </label>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'></div>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <AiOutlineSearch className='h-5 w-5 opacity-60' aria-hidden='true' />
              </div>
              <input
                disabled
                id='search'
                name='search'
                className='w-full rounded-2xl border-light-bordergray bg-white pl-10 shadow-sm focus:border-light-violet7 focus:ring-light-violet7 disabled:cursor-not-allowed disabled:opacity-50 dark:border-mauve dark:bg-darkMode-violet2 dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                placeholder='Search for a creator'
                type='search'
              />
            </div>
          </div>
          <div className='flex justify-center px-2 lg:justify-end'>
            <div className='lg:block'>
              <ul className='flex flex-grow items-center justify-end'>
                {/* TEMPORARY LINKS*/}
                <div className='hidden space-x-14 lg:block'>
                  <Link href='/explore'>
                    <a className='font-semibold text-black opacity-70 transition duration-100 hover:opacity-100 dark:text-white'>
                      Explore
                    </a>
                  </Link>
                </div>

                {!isAuthenticated ? (
                  <button
                    className='ml-10 hidden font-semibold text-black opacity-70 transition duration-100 hover:opacity-100 dark:text-white lg:block'
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    <HiOutlineMoon className='dark:fill-white' size={20} />
                  </button>
                ) : null}
                <div className='block lg:hidden'>
                  {/* Mobile menu button */}
                  <MobileMenu />
                </div>
                <div className='ml-10 hidden lg:block '>
                  {/* Profile dropdown */}
                  {isAuthenticated ? (
                    <div className='flex flex-grow flex-wrap items-center justify-end'>
                      <ProfileDropdownMenu />
                    </div>
                  ) : (
                    <ul className='flex flex-grow flex-wrap items-center justify-end'>
                      <li>
                        <button
                          onClick={() => login()}
                          className='whitespace-nowrap rounded-3xl bg-gradient-to-tr from-light-violet8 via-light-violet10 to-light-violet8 px-5 py-3 text-light-violet1 hover:brightness-90 dark:from-[#4568dc]  dark:to-[#bb46a4] dark:hover:opacity-75'>
                          Connect Wallet
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
