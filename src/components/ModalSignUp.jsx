import Axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import BulletSteps from './BulletSteps'
import { AiOutlineClose } from 'react-icons/ai'
import { useMoralis } from 'react-moralis'
import AuthWallet from './AuthWallet'
import ThirdPartyAuth from './ThirdPartyAuth'
import CreatorInfo from './CreatorInfo'
import { useRouter } from 'next/router'

export default function ModalSignUp() {
  const { query } = useRouter()
  const [open, setOpen] = useState(false)
  // isAuthenticating, logout, account not used currently
  const { authenticate, isAuthenticated, user } = useMoralis()

  // tracks for changes in tokens query param
  useEffect(() => {
    if (!query.tokens || !isAuthenticated) return
    linkYoutubeWithUser()
    setOpen(true)
  }, [query.tokens])

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in to DApp' })
        .then(function (user) {
          console.log('logged in user:', user)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    console.log('user authenticated', user)
  }

  const linkYoutubeWithUser = async () => {
    user.set('youtubeCredentials', JSON.parse(query.tokens))
    user.set('verifiedSocialPlatforms', ['youtube'])
    await user.save().catch((err) => {
      // handle err
      console.log(err)
    })
  }

  // calculates the step a creator is on signing process
  const calculateStep = () => {
    if (!isAuthenticated) return 1

    const verifiedSocialPlatforms = user.get('verifiedSocialPlatforms')
    if (!verifiedSocialPlatforms || verifiedSocialPlatforms.length < 1) return 2

    if (!user.getEmail()) return 3

    // all steps completed
    return 4
  }

  const connectYoutube = async () => {
    const url = (await Axios.get(`/api/loginyt`)).data
    window.location = url
  }

  const submitPersonalInfo = async (username, email) => {
    user.set('username', username)
    user.set('email', email)

    const saveUser = await user.save().catch((err) => {
      // handle error
      console.log(err)
    })

    if (saveUser) setOpen(false)
    if (saveUser) return saveUser
  }

  function CloseModal() {
    setOpen(false)
    return <></>
  }

  const Modal = () => {
    switch (calculateStep()) {
      case 1:
        return <AuthWallet login={login} />
      case 2:
        return <ThirdPartyAuth connectYoutube={connectYoutube} />
      case 3:
        return <CreatorInfo submit={submitPersonalInfo} />
      case 4:
        return <CloseModal />
    }
  }

  return (
    <>
      {/* Button to open modal*/}
      <button
        className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50'
        onClick={() => setOpen(true)}>
        Sign Up As Creator
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
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 dark:bg-gray-900 dark:bg-opacity-75 bg-opacity-75 transition-opacity' />
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
                    <BulletSteps current={calculateStep()} total={3} />
                    <br />
                    {Modal()}
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
