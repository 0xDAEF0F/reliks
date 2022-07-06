import { Menu, Transition, Switch } from '@headlessui/react'
import { Fragment, forwardRef } from 'react'
import { useMoralis } from 'react-moralis'
import { HiChevronUp, HiMoon } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillGearFill } from 'react-icons/bs'
import { IoLogOut } from 'react-icons/io5'
import { useTheme } from 'next-themes'
import Link from 'next/link'

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

  const { logout } = useMoralis()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex items-center w-full justify-center rounded-md hover:opacity-80 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <CgProfile className='ml-2 -mr-1 h-8 w-8 ' aria-hidden='true' />
            <HiChevronUp className='ml-2 -mr-1 h-5 w-5' aria-hidden='true' />
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
          <Menu.Items
            static
            className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-zinc-800 rounded-md bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <MyLink
                    href='/profile'
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } group flex items-center w-full rounded-md px-2 py-2 text-sm gap-2`}>
                    <FaUserAlt />
                    <p>Profile</p>
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MyLink
                    href='/settings'
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}>
                    <BsFillGearFill />
                    <p>Settings</p>
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() =>
                      setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm`}>
                    <div className='flex items-center gap-2 justify-end'>
                      <HiMoon size={18} />
                      <p>Night Mode</p>
                    </div>
                    <Switch
                      checked={theme === 'dark'}
                      onChange={() =>
                        setTheme(theme === 'light' ? 'dark' : 'light')
                      }
                      className=' group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Use night mode</span>
                      <span
                        aria-hidden='true'
                        className='pointer-events-none absolute w-full h-full rounded-md'
                      />
                      <span
                        aria-hidden='true'
                        className={classNames(
                          theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-200',
                          'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
                        )}
                      />
                      <span
                        aria-hidden='true'
                        className={classNames(
                          theme === 'dark' ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
                        )}
                      />
                    </Switch>
                  </a>
                )}
              </Menu.Item>
            </div>

            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => logout()}
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}>
                    <IoLogOut size={20} />
                    <p>Logout</p>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
