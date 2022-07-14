import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Header from '../../components/Header'
import SignUpAsCreatorBanner from '../../components/SignUpAsCreatorBanner'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ModalWhaleContract from '../../components/ModalWhaleContract'
import toast from 'react-hot-toast'

function Profile() {
  const router = useRouter()
  const [user, setUser] = useState({})

  // monitor for username slug
  useEffect(() => {
    if (!router.query?.username) return
    Axios.post('/api/getCreatorInformation', {
      username: router.query.username,
    })
      .then((res) => (!res.data ? router.push('/') : setUser(res.data)))
      .catch(() => router.push('/'))
  }, [router.query])

  function copy2Clipboard() {
    navigator.clipboard.writeText(userAddress)
    toast.success('Address copied to clipboard.')
  }

  const userAddress = user.ethAddress
  const options = { year: 'numeric', month: 'long' }

  return (
    <>
      <Header />
      <SignUpAsCreatorBanner />
      <div className='mx-auto max-w-7xl pt-20 sm:px-6 sm:pt-20'>
        <Image
          src={user.coverPhoto || '/wp.png'}
          className='rounded-lg'
          width={1240}
          height={320}
          alt='banner'
        />
        <div className='mx-auto h-full items-start pt-2 md:mx-10 md:flex md:h-36 md:justify-between'>
          <div className='flex flex-col items-center md:flex-row'>
            <div className='relative -inset-y-10'>
              <div className='rounded-full shadow-md'>
                <Image
                  src={user.pfp || '/pp.jpg'}
                  className='rounded-full'
                  width={150}
                  height={150}
                  alt='pp'
                />
              </div>
            </div>
            <div className='-mt-10 ml-0 text-center md:-mt-16 md:ml-2 md:text-left'>
              <p className='text-3xl font-semibold'>{user.channelTitle}</p>
              <div>
                <button
                  onClick={copy2Clipboard}
                  title='Copy'
                  className='mt-1 h-auto w-36 rounded-full bg-light-violet3 py-1 px-2 hover:bg-light-violet4 active:bg-light-violet5 dark:bg-darkMode-violet3 dark:hover:bg-darkMode-violet4 dark:hover:text-darkMode-gray dark:active:bg-darkMode-violet5'>
                  <div className='flex items-center justify-between'>
                    <Image
                      src='/ethereum.svg'
                      alt='MetaMask logo'
                      width={30}
                      height={30}
                    />
                    <p className='truncate pl-1 text-sm font-semibold'>{userAddress}</p>
                  </div>
                </button>
                <p className='mt-1 ml-2  text-sm text-light-gray dark:text-darkMode-gray'>
                  Joined:{' '}
                  {user &&
                    new Date(user.createdAt).toLocaleDateString(undefined, options)}
                </p>
              </div>
            </div>
          </div>
          <div className='mr-4 mb-4 mt-2 flex justify-end md:mr-0'>
            <ModalWhaleContract />
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default Profile
