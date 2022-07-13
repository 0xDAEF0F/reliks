import React from 'react'
import Image from 'next/image'
import ModalWhaleContract from './ModalWhaleContract'
import { useMoralis } from 'react-moralis'
import toast from 'react-hot-toast'

function Profile() {
  const { user } = useMoralis()

  const youtubeCreds = user && user.get('youtubeCredentials')
  const userAddress = user && user.get('ethAddress')

  function copy2Clipboard() {
    navigator.clipboard.writeText(userAddress)
    toast.success('Address copied to clipboard.')
  }

  return (
    <div className='max-w-7xl mx-auto pt-20 sm:pt-20 sm:px-6'>
      <div>
        {/* to fix responsiveness and convert it to next Image */}
        <div>
          <img
            src={youtubeCreds?.coverPhoto || '/wp.png'}
            className='h-52 md:h-80 w-full rounded-lg'
            alt='logo'
          />
        </div>
        <div className='md:flex md:justify-between items-start mx-auto md:mx-10 pt-2 h-full md:h-36'>
          <div className='flex items-center flex-col md:flex-row'>
            <div className='relative -inset-y-10'>
              {/* to fix responsiveness and convert it to next Image */}
              <img
                className='h-36 w-36 p-2  shadow-md dark:shadow-black rounded-full bg-white dark:bg-black'
                src={youtubeCreds?.pfp || '/pp.jpeg'}
                alt='logo'
              />
            </div>
            <div className='text-center md:text-left -mt-10 md:-mt-16 ml-0 md:ml-2'>
              <p className='text-3xl font-semibold'>
                {youtubeCreds?.channelTitle}
              </p>
              <div>
                <button
                  onClick={copy2Clipboard}
                  title='Copy'
                  className='dark:hover:text-darkMode-gray dark:bg-darkMode-violet3 dark:hover:bg-darkMode-violet4 dark:active:bg-darkMode-violet5 bg-light-violet3 hover:bg-light-violet4 active:bg-light-violet5 rounded-full mt-1 py-1 px-2 w-36 h-auto'>
                  <div className='flex justify-between items-center'>
                    <Image
                      src='/ethereum.svg'
                      alt='MetaMask logo'
                      width={30}
                      height={30}
                    />
                    <p className='text-sm font-semibold pl-1 truncate'>
                      {userAddress}
                    </p>
                  </div>
                </button>
                <p className='text-light-gray dark:text-darkMode-gray  mt-1 ml-2 text-sm'>
                  Joined:{' '}
                  {user && new Date(user.get('createdAt')).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-end mr-4 mb-4 md:mr-0 mt-2'>
            <ModalWhaleContract />
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Profile
