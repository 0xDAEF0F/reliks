import React from 'react'
import { FaPen } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { createWhaleFactory } from '../util/deployWhale'
import Moralis from 'moralis'

function Profile() {
  let publicKey = '0x8a1b5f0ac1c070be13559df36c3092093402389402'
  function copy2Clipboard() {
    navigator.clipboard.writeText(publicKey)
  }

  const deployWhale = async () => {
    try {
      const WhaleFactory = await createWhaleFactory()
      const contract = await WhaleFactory.deploy(
        '0x9367d8c5Db2Eeb7dFA2504aB30323d3FAa4c015a',
        3,
        Moralis.web3Library.utils.parseEther('1')
      )
      console.log('contract address: ', contract.address)
      await contract.deployed()
      console.log('contract deployed succesfully.')
    } catch (err) {
      // handle error
      console.log(err)
    }
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
        <div className='md:flex md:justify-between items-start mx-auto md:mx-10 pt-2 border-b-2 h-full md:h-36'>
          <div className='flex items-center flex-col md:flex-row'>
            <div className='relative h-40 w-40 -inset-y-10'>
              {/* to fix responsiveness and convert it to next Image */}
              <img
                className='p-2 block border rounded-full bg-white'
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
          <div className='flex justify-end mr-4 mb-4 md:mr-0 pt-2'>
            <button className='flex gap-2 items-center bg-gray-200 hover:brightness-95 px-2 py-1 border rounded'>
              <FaPen size={14} />
              <Link href='profile/settings'>
                <a className='text-gray-800 font-medium whitespace-nowrap'>
                  Edit profile
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <br />
      <button
        onClick={deployWhale}
        className='text-lg border rounded bg-gray-200 px-3'>
        yolo
      </button>
    </div>
  )
}

export default Profile
