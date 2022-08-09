import { useState } from 'react'
import { HiOutlineSpeakerphone, HiX } from 'react-icons/hi'
import CreatorSignUpModal from './CreatorSignUpModal'
import { useMoralis } from 'react-moralis'

export default function SignUpAsCreatorBanner({ xclass }) {
  const { user } = useMoralis()

  function isCreator() {
    const verifiedSocialPlatforms = user?.get('verifiedSocialPlatforms')
    if (verifiedSocialPlatforms?.length > 0) return true
    return false
  }

  const [open, setOpen] = useState(true)
  return (
    <div className={`relative z-10 pt-20 ${!open || isCreator() ? `${xclass}` : ''}`}>
      <div className='fixed w-full border-light-violet6  bg-light-violet10 dark:border-darkMode-violet6 dark:bg-darkMode-violet10'>
        <div className='mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='flex w-0 flex-1 items-center'>
              <span className='flex rounded-lg bg-light-violet10 p-2'>
                <HiOutlineSpeakerphone size={20} color='white' aria-hidden='true' />
              </span>
              <p className='ml-3 truncate font-medium text-white'>
                <span className='md:hidden'>
                  Sign up as a Creator to create Strategies and much more!
                </span>
                <span className='hidden md:inline'>
                  Sign up as a Creator to create Strategies and much more!
                </span>
              </p>
            </div>
            <div className='order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto'>
              <CreatorSignUpModal xClass='border-transparent flex items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-light-violet11 shadow-sm hover:bg-light-violet4 active:bg-light-violet5' />
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                onClick={() => setOpen(false)}
                type='button'
                className='-mr-1 flex rounded-md p-2 hover:bg-light-violet9 focus:outline-none focus:ring-2 focus:ring-white dark:hover:bg-darkMode-violet9 sm:-mr-2'>
                <span className='sr-only'>Dismiss</span>
                <HiX size={20} color='white' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
