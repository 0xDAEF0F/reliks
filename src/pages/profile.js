import React, { useEffect } from 'react'
import Header from '../components/Header'
import SignUpAsCreatorBanner from '../components/SignUpAsCreatorBanner'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ModalWhaleContract from '../components/ModalWhaleContract'
import toast from 'react-hot-toast'

function Profile() {
  const router = useRouter()
  const { isInitialized, isAuthenticated, user } = useMoralis()

  useEffect(() => {
    isInitialized && isAuthenticated && isCreator() ? null : router.push('/')
  }, [isInitialized, isAuthenticated])

  function isCreator() {
    const verifiedSocialPlatforms = user.get('verifiedSocialPlatforms')
    if (verifiedSocialPlatforms.length > 0) return true
    return false
  }

  function copy2Clipboard() {
    navigator.clipboard.writeText(userAddress)
    toast.success('Address copied to clipboard.')
  }

  const youtubeCreds = user && user.get('youtubeCredentials')
  const userAddress = user && user.get('ethAddress')

  return (
    <>
      <Header />
      <SignUpAsCreatorBanner />
      <div className='max-w-7xl mx-auto pt-20 sm:pt-20 sm:px-6'>
        <div>
          <Image
            src={youtubeCreds?.coverPhoto || '/wp.png'}
            className='rounded-lg'
            width={1240}
            height={320}
            alt='banner'
          />
          <div className='md:flex md:justify-between items-start mx-auto md:mx-10 pt-2 h-full md:h-36'>
            <div className='flex items-center flex-col md:flex-row'>
              <div className='relative -inset-y-10'>
                <div className='rounded-full shadow-md'>
                  <Image
                    src={youtubeCreds?.pfp || '/pp.jpeg'}
                    className='rounded-full'
                    width={150}
                    height={150}
                    alt='pp'
                  />
                </div>
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
                    {user &&
                      new Date(user.get('createdAt')).toLocaleDateString()}
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
    </>
  )
}

export default Profile
