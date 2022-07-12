import React from 'react'
import { FaPen } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import Moralis from 'moralis'
import ModalWhaleContract from './ModalWhaleContract'

function Profile() {
  // TODO: Change dynamically
  const publicKey = '0x8a1b5f0ac1c070be13559df36c3092093402389402'

  function copy2Clipboard() {
    navigator.clipboard.writeText(publicKey)
  }

  return (
    <div className='max-w-7xl mx-auto pt-20 sm:pt-20 sm:px-6'>
      <div>
        {/* to fix responsiveness and convert it to next Image */}
        <img
          src='/wp.png'
          className='h-52 md:h-80 w-full rounded-lg'
          alt='logo'
        />
        <div className='md:flex md:justify-between items-start mx-auto md:mx-10 pt-2 h-full md:h-36'>
          <div className='flex items-center flex-col md:flex-row'>
            <div className='relative h-40 w-40 -inset-y-10'>
              {/* to fix responsiveness and convert it to next Image */}
              <img
                className='p-2 block shadow-md dark:shadow-black rounded-full bg-white dark:bg-black'
                src='/pp.jpeg'
                alt='logo'
              />
            </div>
            <div className='text-center md:text-left -mt-10 md:-mt-16 ml-0 md:ml-2'>
              <p className='text-3xl font-semibold'>Test User</p>
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
                      {publicKey}
                    </p>
                  </div>
                </button>
                <p className='text-light-gray dark:text-darkMode-gray  mt-1 ml-2 text-sm'>
                  Joined July 2022
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-end mr-4 mb-4 md:mr-0 mt-2'>
            <Link href='profile/settings'>
              <a className=' text-white font-medium whitespace-nowrap flex gap-2 items-center bg-light-violet9 hover:bg-light-violet10 dark:bg-darkMode-violet9 dark:hover:bg-darkMode-violet10 px-2 py-1 rounded'>
                <FaPen color='white' size={14} />
                Edit profile
              </a>
            </Link>
          </div>
        </div>
        <ModalWhaleContract />
      </div>
      <br />
    </div>
  )
}

export default Profile
