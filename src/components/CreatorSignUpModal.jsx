import Axios from 'axios'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import BulletSteps from './BulletSteps'
import { AiOutlineClose } from 'react-icons/ai'
import { useMoralis } from 'react-moralis'
import { AuthWeb3 } from './AuthWeb3'
import ThirdPartyAuth from './ThirdPartyAuth'
import toast from 'react-hot-toast'
import to from 'await-to-js'

export default function CreatorSignUpModal() {
  const [open, setOpen] = useState(false)
  // isAuthenticating, logout, account not used currently
  const { authenticate, isAuthenticated, user } = useMoralis()

  const login = async () => {
    if (isAuthenticated) {
      toast.success('Already Signed In.')
      return
    }
    const [, usr] = await to(
      authenticate({ signingMessage: 'Please Sign Message to Log In.' })
    )
    if (usr) toast.success('Succesfully Signed In.')
    if (!usr) toast.error(`Could not sign in. Please try again.`)
  }

  // calculates the step a creator is on signing process
  const calculateStep = () => {
    if (!isAuthenticated) return 1

    const verifiedSocialPlatforms = user.get('verifiedSocialPlatforms')
    if (!verifiedSocialPlatforms || verifiedSocialPlatforms.length < 1) return 2

    // all steps completed
    return 3
  }

  const connectYoutube = async () => {
    const url = (await Axios.get(`/api/loginyt?state=${user.getUsername()}`)).data
    window.location = url
  }

  function CloseModal() {
    setOpen(false)
    return <></>
  }

  const Modal = () => {
    switch (calculateStep()) {
      case 1:
        return <AuthWeb3 login={login} />
      case 2:
        return <ThirdPartyAuth connectYoutube={connectYoutube} />
      case 3:
        return <CloseModal />
    }
  }

  return (
    <>
      {/* Button to open modal*/}
      <button
        className='border-transparent flex items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-light-violet11 shadow-sm hover:bg-light-violet4 active:bg-light-violet5'
        onClick={() => setOpen(true)}>
        Sign Up As Creator
      </button>

      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-30 overflow-y-auto' onClose={setOpen}>
          <div className='flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-mauve bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:h-screen sm:align-middle'
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
              <div className='inline-block w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-mauve sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:px-10 sm:align-middle'>
                <div className='absolute top-0 right-0 hidden pt-4 pr-6 sm:block'>
                  <button
                    type='button'
                    className='rounded-md text-light-gray focus:outline-none focus:ring-2 focus:ring-light-violet7 dark:text-darkMode-gray dark:focus:ring-darkMode-violet7'
                    onClick={() => setOpen(false)}>
                    <AiOutlineClose size={18} />
                  </button>
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                  <BulletSteps current={calculateStep()} total={2} />
                  <br />
                  {Modal()}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
