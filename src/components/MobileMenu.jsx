import { Switch } from '@headlessui/react'
import { useState } from 'react'
import LinkChevron from './LinkChevron'
import { useTheme } from 'next-themes'
import { useMoralis } from 'react-moralis'
import toast from 'react-hot-toast'
import to from 'await-to-js'
import { MdLogout } from 'react-icons/md'
import { HiOutlineMoon } from 'react-icons/hi'

export default function MobileMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const { logout, user, isAuthenticated, authenticate } = useMoralis()

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
                ? 'absolute left-0 z-10 mt-12 flex h-screen w-full flex-col bg-light-violet2 px-5 dark:bg-darkMode-violet2'
                : 'hidden'
            }>
            <ul className='mt-10 space-y-10'>
              <li>
                <LinkChevron title={'Explore'} to={'/explore'} xClass='w-full' />
              </li>
              {/* <li>
                <LinkChevron title={'Stats'} to={'/stats'} xClass='w-full' />
              </li>
              <li>
                <LinkChevron title={'About us'} to={'/about'} xClass='w-full' />
              </li> */}
              <li>
                <a
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className='flex w-full cursor-pointer items-center justify-between rounded-md px-1 py-2 text-base font-medium text-black opacity-60 hover:bg-light-violet5 hover:opacity-100 dark:text-white dark:hover:bg-darkMode-violet5'>
                  <span className='flex items-center gap-2'>
                    <HiOutlineMoon size={26} />
                    <span>Night Mode</span>
                  </span>
                  <Switch
                    checked={theme === 'dark'}
                    onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className='relative inline-flex h-5 w-10 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-light-violet7 focus:ring-offset-2 dark:focus:ring-darkMode-violet7'>
                    <span className='sr-only'>Use night mode</span>
                    <span
                      aria-hidden='true'
                      className='pointer-events-none absolute h-full w-full rounded-md'
                    />
                    <span
                      aria-hidden='true'
                      className={classNames(
                        theme === 'dark' ? 'bg-darkMode-violet9' : 'bg-black',
                        'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
                      )}
                    />
                    <span
                      aria-hidden='true'
                      className={classNames(
                        theme === 'dark' ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-black bg-white shadow ring-0 transition-transform duration-200 ease-in-out dark:border-darkMode-violet7'
                      )}
                    />
                  </Switch>
                </a>
              </li>
              <li>
                {isCreator() ? (
                  <LinkChevron
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
                    className='ml-1 flex w-full cursor-pointer items-center rounded-md py-3 pl-1 text-base font-semibold text-black opacity-60 hover:bg-light-violet5 hover:opacity-100 dark:text-white dark:hover:bg-darkMode-violet5'
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
