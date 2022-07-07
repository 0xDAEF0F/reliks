import React from 'react'
import { FaPen } from 'react-icons/fa'
import Image from 'next/image'

function Profile() {
  let publicKey = '0x8a1b5f0ac1c070be13559df36c3092093402389402'
  function copy2Clipboard() {
    navigator.clipboard.writeText(publicKey)
  }
  return (
    <div className='max-w-7xl mx-auto pt-32 sm:pt-20 sm:px-6'>
      <div className='border-b-2 pb-2'>
        <div className='relative bg-cover'>
          {/* to fix responsiveness and convert it to next Image */}
          <img src='/wp.png' className='h-80 w-full rounded-lg' alt='logo' />
        </div>
        <div className='flex justify-between items-start mx-2 md:mx-10 pt-2'>
          <div className='flex'>
            <div className='h-40 w-40'>
              {/* to fix responsiveness and convert it to next Image */}
              <img
                className='p-2 block border rounded-full'
                src='./googleLogo.png'
                alt='logo'
              />
            </div>
            <div className='p-4 pt-5 '>
              <p className='text-2xl lg:text-3xl font-semibold'>Test User</p>
              <div>
                <button
                  onClick={copy2Clipboard}
                  title='Copy'
                  className='bg-gray-100 rounded-full mt-1 py-1 px-2 w-36 h-auto'>
                  <div className='flex justify-between items-center'>
                    <Image
                      src='/ethereum.svg'
                      alt='MetaMask logo'
                      width={30}
                      height={30}
                    />
                    <p className='text-sm font-semibold pl-1 text-gray-600 truncate hover:text-black'>
                      {publicKey}
                    </p>
                  </div>
                </button>
                <p className='mt-1 ml-2 text-sm text-gray-500'>
                  Joined July 2022
                </p>
              </div>
            </div>
          </div>
          <button className='flex gap-2 items-center bg-gray-200 hover:brightness-95 px-2 py-1 border rounded'>
            <FaPen size={14} />
            <p className='text-gray-800 font-medium whitespace-nowrap'>
              Edit profile
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
