import { Menu, Transition, Switch } from '@headlessui/react'
import { Fragment, forwardRef } from 'react'
import { useMoralis } from 'react-moralis'
import { HiMoon } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import toast from 'react-hot-toast'

// eslint-disable-next-line react/display-name
const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})

export default function ProfileDropdownMenu() {
  const { theme, setTheme } = useTheme()
  const { logout, user } = useMoralis()

  const youtubeCreds = user && user.get('youtubeCredentials')

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function isCreator() {
    const verifiedSocialPlatforms = user.get('verifiedSocialPlatforms')
    if (verifiedSocialPlatforms.length > 0) return true
    return false
  }

  return (
    <div>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='hover:ring-2 ring-black dark:ring-white justify-center rounded-full'>
            <img
              className='w-12 h-12 p-1 block shadow-md rounded-full bg-white dark:bg-black'
              src={youtubeCreds?.pfp || '/pp.jpeg'}
              alt='logo'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-light-bordergray dark:divide-darkMode-bordergray rounded-md bg-white dark:bg-mauve shadow-lg ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              {/* Profile only available to creators */}
              {isCreator() ? (
                <Menu.Item>
                  <MyLink
                    href='/profile'
                    className='hover:bg-light-violet5 dark:hover:bg-darkMode-violet5 flex items-center w-full rounded-md px-2 py-2 text-sm gap-2'>
                    <FaUserAlt />
                    <p>Profile</p>
                  </MyLink>
                </Menu.Item>
              ) : null}
              <Menu.Item>
                <a
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className='hover:bg-light-violet5 dark:hover:bg-darkMode-violet5 flex justify-between w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer'>
                  <div className='flex items-center gap-2 justify-end'>
                    <HiMoon size={18} />
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
                        'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-light-violet7 dark:border-darkMode-violet7 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </a>
              </Menu.Item>
            </div>

            <div className='px-1 py-1'>
              <Menu.Item>
                <button
                  onClick={async () => {
                    await logout()
                    toast.success('Logged out succesfully.')
                  }}
                  className='hover:bg-light-violet5 dark:hover:bg-darkMode-violet5 flex w-full items-center rounded-md px-2 py-2 text-sm gap-2'>
                  <IoLogOut size={20} />
                  <p>Logout</p>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
