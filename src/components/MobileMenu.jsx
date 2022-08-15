import { useState, useEffect } from 'react'
import LinkIcon from './LinkIcon'
import { useTheme } from 'next-themes'
import { useMoralis } from 'react-moralis'
import toast from 'react-hot-toast'
import to from 'await-to-js'
import { MdLogout } from 'react-icons/md'
import { HiOutlineMoon } from 'react-icons/hi'
import SearchBar from './SearchBar'
import SwitchToggle from './SwitchToggle'

export default function MobileMenu() {
  const [mounted, setMounted] = useState(false)
  const { logout, user, isAuthenticated, authenticate } = useMoralis()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  function isCreator() {
    const verifiedSocialPlatforms = user?.get('verifiedSocialPlatforms')
    if (verifiedSocialPlatforms?.length > 0) return true
    return false
  }

  const login = async () => {
    console.log('object')
    if (isAuthenticated) {
      toast.success('Already Signed In.')
      return
    }
    const [, usr] = await to(
      authenticate({ signingMessage: 'Please Sign Message to Log In.' })
    )
    if (usr) toast.success('Succesfully Signed In.')
    if (!usr) toast.error(`Could not sign in. Please try again.`)
    setIsNavOpen(false)
  }

  // Only render UI that uses the current theme when the page is mounted on the client
  // Avoid hydration mismatch error
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <>
      <nav>
        <section className='flex'>
          <button onClick={() => setIsNavOpen((prev) => !prev)}>
            {!isNavOpen ? (
              <div className='space-y-2'>
                <span className='block h-0.5 w-7 animate-pulse bg-black dark:bg-white'></span>
                <span className='block h-0.5 w-7 animate-pulse bg-black dark:bg-white'></span>
                <span className='block h-0.5 w-7 animate-pulse bg-black dark:bg-white'></span>
              </div>
            ) : (
              <svg
                className='text-gray-600 h-8 w-8'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            )}
          </button>

          <nav
            className={
              isNavOpen
                ? 'absolute left-0 z-10 mt-14 flex h-screen w-full flex-col bg-light-violet2 px-5 dark:bg-darkMode-violet2'
                : 'hidden'
            }>
            <ul className='mt-5 space-y-10'>
              <li>
                <SearchBar xClass='flex md:invisible' />
              </li>
              <li>
                <LinkIcon title={'Explore'} to={'/explore'} xClass='w-full' />
              </li>
              <li>
                <div
                  onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
                  className='flex w-full cursor-pointer items-center justify-between rounded-md px-1 py-2 text-base font-medium text-black opacity-60 hover:bg-light-violet5 hover:opacity-100 dark:text-white dark:hover:bg-darkMode-violet5'>
                  <div className='flex items-center gap-2'>
                    <HiOutlineMoon size={26} />
                    <span>Night Mode</span>
                  </div>
                  <SwitchToggle
                    checked={resolvedTheme}
                    onChange={() =>
                      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
                    }
                  />
                </div>
              </li>
              <li>
                {isCreator() ? (
                  <LinkIcon
                    title={'Profile'}
                    to={`/profile/${user.getUsername()}`}
                    xClass='w-full'
                  />
                ) : null}
              </li>
              <li>
                {isAuthenticated ? (
                  <button
                    className='ml-1 flex w-full cursor-pointer items-center rounded-md py-3 pl-1 text-base font-semibold text-black opacity-60 hover:bg-light-violet5 hover:opacity-100 dark:text-white dark:hover:bg-darkMode-violet5'
                    onClick={async () => {
                      await logout()
                      toast.success('Logged out succesfully.')
                      setIsNavOpen(false)
                    }}>
                    <MdLogout size={26} />
                    <span className='ml-1'>Logout</span>
                  </button>
                ) : (
                  <button
                    className='w-full whitespace-nowrap rounded-3xl bg-gradient-to-tr from-light-violet8 via-light-violet10 to-light-violet8 px-5 py-3 font-semibold text-light-violet1 hover:brightness-90 dark:from-[#4568dc]  dark:to-[#bb46a4] dark:hover:opacity-75'
                    onClick={() => {
                      login()
                    }}>
                    Connect wallet
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </section>
      </nav>
    </>
  )
}
