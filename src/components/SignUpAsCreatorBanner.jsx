import { useState } from 'react'
import { HiOutlineSpeakerphone, HiX } from 'react-icons/hi'
import CreatorSignUpModal from './CreatorSignUpModal'
import { useMoralis } from 'react-moralis'

export default function SignUpAsCreatorBanner() {
  const { user } = useMoralis()

  function isCreator() {
    const verifiedSocialPlatforms = user?.get('verifiedSocialPlatforms')
    if (verifiedSocialPlatforms?.length > 0) return true
    return false
  }

  const [open, setOpen] = useState(true)
  return (
    <div
      className={`pt-16 md:pt-20 ${
        !open || isCreator() ? 'hidden md:invisible md:block' : ''
      }`}>
      <div className='fixed w-full bg-light-violet9  dark:bg-light-violet9'>
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
              <CreatorSignUpModal />
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                onClick={() => setOpen(false)}
                type='button'
                className='-mr-1 flex rounded-md p-2 hover:bg-light-violet10 focus:outline-none focus:ring-2 focus:ring-white dark:hover:bg-darkMode-violet10 sm:-mr-2'>
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
