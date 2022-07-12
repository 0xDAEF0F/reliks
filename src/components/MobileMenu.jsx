import { Switch } from '@headlessui/react'
import { useState } from 'react'
import LinkChevron from './LinkChevron'
import { useTheme } from 'next-themes'

export default function MobileMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <nav>
        <section className='flex md:hidden'>
          <button onClick={() => setIsNavOpen((prev) => !prev)}>
            {!isNavOpen ? (
              <div className='space-y-2'>
                <span className='block h-0.5 w-7 animate-pulse bg-black dark:bg-white'></span>
                <span className='block h-0.5 w-7 animate-pulse bg-black dark:bg-white'></span>
                <span className='block h-0.5 w-7 animate-pulse bg-black dark:bg-white'></span>
              </div>
            ) : (
              <svg
                className='h-8 w-8 text-gray-600'
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
                ? 'flex flex-col absolute w-full h-screen mt-10 left-0 bg-light-violet2 dark:bg-darkMode-violet2 z-10 px-5'
                : 'hidden'
            }>
            <ul className='mt-14'>
              <li className='mb-5 lg:hidden'>
                <LinkChevron
                  title={'Explore'}
                  to={'/explore'}
                  xClass='w-full'
                />
              </li>
              <li className='mb-5 lg:hidden'>
                <LinkChevron title={'Stats'} to={'/stats'} xClass='w-full' />
              </li>

              <li className='mb-5 lg:hidden'>
                <LinkChevron title={'About us'} to={'/about'} xClass='w-full' />
              </li>
              <li>
                <a
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className='opacity-60 text-black dark:text-white hover:opacity-100 text-base font-medium hover:bg-light-violet5 dark:hover:bg-darkMode-violet5 flex justify-between w-full items-center rounded-md px-2 py-2 cursor-pointer'>
                  <div className='flex items-center gap-2 justify-end'>
                    <p>Night Mode</p>
                  </div>
                  <Switch
                    checked={theme === 'dark'}
                    onChange={() =>
                      setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                    className='relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-violet7 dark:focus:ring-darkMode-violet7'>
                    <span className='sr-only'>Use night mode</span>
                    <span
                      aria-hidden='true'
                      className='pointer-events-none absolute w-full h-full rounded-md'
                    />
                    <span
                      aria-hidden='true'
                      className={classNames(
                        theme === 'dark' ? 'bg-darkMode-violet9' : 'bg-black',
                        'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
                      )}
                    />
                    <span
                      aria-hidden='true'
                      className={classNames(
                        theme === 'dark' ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-black dark:border-darkMode-violet7 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </nav>
    </>
  )
}
