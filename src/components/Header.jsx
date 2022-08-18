import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { HiOutlineSun } from 'react-icons/hi'
import { IoMoonOutline } from 'react-icons/io5'
import SearchBar from './SearchBar'
import { useMoralis } from 'react-moralis'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import MobileMenu from './MobileMenu'
import toast from 'react-hot-toast'
import to from 'await-to-js'
import Logo from './Logo'

function Header() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { authenticate, isAuthenticated } = useMoralis()

  const login = async () => {
    if (!window.ethereum || !window.ethereum.on) {
      toast.error('Please Install MetaMask.')
      return
    }
    const [, usr] = await to(
      authenticate({ signingMessage: 'Please Sign Message to Log In.' })
    )
    if (usr) toast.success('Succesfully Signed In.')
    if (!usr) toast.error(`Could Not Sign In. Please Check Metamask.`)
  }

  // Only render UI that uses the current theme when the page is mounted on the client
  // Avoid hydration mismatch error
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const ThemeIcon = () => {
    switch (resolvedTheme) {
      case 'light':
        return <IoMoonOutline size={20} />
      case 'dark':
        return <HiOutlineSun size={20} />
    }
  }

  return (
    <header className='dark:shadow-zinc-700 fixed z-20 w-full bg-light-violet2 shadow-sm backdrop-blur-sm dark:bg-darkMode-violet1 dark:bg-opacity-90 dark:shadow-darkMode-violet2 md:bg-opacity-90'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='flex h-20 items-center justify-between'>
          <Logo />
          <div className='mx-5 w-full md:mx-10'>
            <SearchBar xClass='hidden md:flex' />
          </div>
          <div className='flex justify-center px-2 lg:justify-end'>
            <div className='lg:block'>
              <div className='flex flex-grow items-center justify-end'>
                <div className='hidden space-x-14 lg:block'>
                  <Link href='/explore'>
                    <a className='rounded-md px-2 py-3 font-semibold text-black opacity-70 transition duration-100 hover:bg-light-bordergray hover:opacity-100 dark:text-white dark:hover:bg-darkMode-violet5 '>
                      Explore
                    </a>
                  </Link>
                </div>
                {!isAuthenticated && (
                  <button
                    aria-label='theme switch'
                    className='ml-10 hidden rounded-md px-3 py-3 font-semibold text-black text-opacity-70 transition duration-100 hover:bg-light-bordergray hover:text-opacity-100 dark:text-white dark:hover:bg-darkMode-violet5 lg:block'
                    onClick={() =>
                      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
                    }>
                    {ThemeIcon()}
                  </button>
                )}
                <div className='block lg:hidden'>
                  {/* Mobile menu button */}
                  <MobileMenu />
                </div>
                <div className='ml-10 hidden lg:block '>
                  {/* Profile dropdown */}
                  {isAuthenticated ? (
                    <ProfileDropdownMenu />
                  ) : (
                    <button
                      onClick={login}
                      className='whitespace-nowrap rounded-3xl bg-gradient-to-tr from-light-violet8 via-light-violet10 to-light-violet8 px-5 py-3 font-semibold text-light-violet1 hover:brightness-90 dark:from-[#4568dc]  dark:to-[#bb46a4] dark:hover:opacity-75'>
                      Connect Wallet
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
