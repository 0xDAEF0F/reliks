import { useState } from 'react'
import { HiOutlineSpeakerphone, HiX } from 'react-icons/hi'
import CreatorSignUpModal from './CreatorSignUpModal'

export default function Banner() {
  const [open, setOpen] = useState(true)
  return (
    <div className={`pt-16 md:pt-20 ${open ? '' : 'hidden'}`}>
      <div className='bg-light-violet9 dark:bg-light-violet9 fixed  w-full'>
        <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between flex-wrap'>
            <div className='w-0 flex-1 flex items-center'>
              <span className='flex p-2 rounded-lg bg-light-violet10'>
                <HiOutlineSpeakerphone
                  size={20}
                  color='white'
                  aria-hidden='true'
                />
              </span>
              <p className='ml-3 font-medium text-white truncate'>
                <span className='md:hidden'>
                  Sign up as a Creator to create Strategies and much more!
                </span>
                <span className='hidden md:inline'>
                  Sign up as a Creator to create Strategies and much more!
                </span>
              </p>
            </div>
            <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
              <CreatorSignUpModal />
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                onClick={() => setOpen(false)}
                type='button'
                className='-mr-1 flex p-2 rounded-md hover:bg-light-violet10 dark:hover:bg-darkMode-violet10 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'>
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
