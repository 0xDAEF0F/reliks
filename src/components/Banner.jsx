import { HiOutlineSpeakerphone, HiX } from 'react-icons/hi'
import ModalSignUp from './ModalSignUp'
import { useState } from 'react'

export default function Banner() {
  const [open, setOpen] = useState(true)
  return (
    <div className={`pt-16 md:pt-20 ${open ? '' : 'hidden'}`}>
      <div className='bg-indigo-600 fixed w-full'>
        <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between flex-wrap'>
            <div className='w-0 flex-1 flex items-center'>
              <span className='flex p-2 rounded-lg bg-indigo-800'>
                <HiOutlineSpeakerphone
                  size={20}
                  color='white'
                  aria-hidden='true'
                />
              </span>
              <p className='ml-3 font-medium text-white truncate'>
                <span className='md:hidden'>
                  Officia ullamco proident minim eu anim aliquip velit mollit
                  labore sunt ullamco eu proident voluptate.
                </span>
                <span className='hidden md:inline'>
                  Aliqua quis non do fugiat ipsum duis duis ipsum proident elit.
                </span>
              </p>
            </div>
            <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
              <ModalSignUp />
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                onClick={() => setOpen(false)}
                type='button'
                className='-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'>
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