import { Menu, Transition } from '@headlessui/react'
import { Fragment, forwardRef } from 'react'
import { useMoralis } from 'react-moralis'
import { HiMoon } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CreatorSignUpModal from './CreatorSignUpModal'
import SwitchToggle from './SwitchToggle'

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
  const { theme, resolvedTheme, setTheme } = useTheme()
  const { logout, user } = useMoralis()
  const router = useRouter()

  const youtubeCreds = user && user.get('youtubeCredentials')

  function isCreator() {
    const verifiedSocialPlatforms = user.get('verifiedSocialPlatforms')
    if (verifiedSocialPlatforms?.length > 0) return true
    return false
  }

  async function logOut() {
    await logout()
    if (router.pathname !== '/') router.push('/')
    toast.success('Logged out succesfully.')
  }

  return (
    <div>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='rounded-full border border-light-violet5 border-opacity-50 bg-light-violet1 p-1 dark:border-darkMode-violet5 dark:border-opacity-100 dark:bg-darkMode-violet1'>
            <div className='relative h-12 w-12'>
              <Image
                src={youtubeCreds?.pfp || '/pp.jpg'}
                className='rounded-full'
                layout='fill'
                alt='pp'
              />
            </div>
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
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-light-bordergray rounded-md bg-white shadow-lg ring-opacity-5 focus:outline-none dark:divide-darkMode-bordergray dark:bg-mauve'>
            <div className='px-1 py-1 '>
              {/* Profile only available to creators */}
              {isCreator() ? (
                <Menu.Item>
                  <MyLink
                    href={`/profile/${user.getUsername()}`}
                    className='flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-light-bordergray dark:hover:bg-darkMode-violet5'>
                    <FaUserAlt />
                    <p>Profile</p>
                  </MyLink>
                </Menu.Item>
              ) : (
                <div className='flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-light-bordergray dark:hover:bg-darkMode-violet5'>
                  <FaUserAlt />
                  <CreatorSignUpModal xClass='absolute pl-6 py-1 pr-14' />
                </div>
              )}
              <Menu.Item>
                <a
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className='flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-2 text-sm hover:bg-light-bordergray dark:hover:bg-darkMode-violet5'>
                  <div className='flex items-center justify-end gap-2'>
                    <HiMoon size={18} />
                    <p>Night Mode</p>
                  </div>
                  <SwitchToggle
                    checked={resolvedTheme}
                    onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  />
                </a>
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                <button
                  onClick={logOut}
                  className='flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-light-bordergray dark:hover:bg-darkMode-violet5'>
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
