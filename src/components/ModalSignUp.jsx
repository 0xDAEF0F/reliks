import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import BulletSteps from './BulletSteps'
import { AiOutlineClose } from 'react-icons/ai'
import { useMoralis } from 'react-moralis'

export default function Example() {
  const [open, setOpen] = useState(false)

  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis()

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user)
          console.log(user.get('ethAddress'))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    console.log(user, account)
  }

  return (
    <>
      {/* Button to open modal*/}
      <button
        className='px-5 py-3 text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3'
        onClick={() => setOpen(true)}>
        Sign Up
      </button>

      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-y-auto'
          onClose={setOpen}>
          <div className='flex items-end -center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-fullll sm:p-6 sm:px-10'>
                <div className='hidden sm:block absolute top-0 right-0 pt-4 pr-6'>
                  <button
                    type='button'
                    className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    onClick={() => setOpen(false)}>
                    <AiOutlineClose size={18} />
                  </button>
                </div>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                    <BulletSteps />
                    <br />
                    <div className='flex justify-center flex-col'>
                      <Dialog.Title
                        as='h2'
                        className='text-2xl leading-6 font-medium text-gray-900'>
                        Authenticate with wallet
                      </Dialog.Title>
                      <button
                        className='flex mt-5 bg-gradient-to-r from-orange-500 to-orange-300 py-4 px-4 rounded-lg transform transition duration-500 hover:scale-105 w-full focus:outline-none'
                        onClick={login}>
                        <img
                          className='w-8'
                          src='/metamask-fox.svg'
                          alt='metamask'
                        />
                        <p className='text-xl text-white font-semibold pl-2'>
                          MetaMask
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
