import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Header from '../../components/Header'
import SignUpAsCreatorBanner from '../../components/SignUpAsCreatorBanner'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { JoinLair } from '../../components/JoinLair'
import toast from 'react-hot-toast'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import Link from 'next/link'

function Profile() {
  const router = useRouter()
  const [user, setUser] = useState({})

  // TODO: Change to getStaticProps or getServerSideProps
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
      <div className='mx-auto max-w-6xl pt-20 md:pt-0 '>
        <div className='relative rounded-b-lg bg-light-violet2 shadow-sm dark:bg-darkMode-violet2'>
          <div className='block'>
            <Image
              src={user.coverPhoto || '/wp.png'}
              width={1000}
              height={220}
              quality={100}
              priority
              className='object-cover object-center md:rounded-t-lg'
              layout='responsive'
              alt='banner'
            />
          </div>
          <div className='mx-auto mb-12 h-full items-start border-b border-dotted border-light-violet6 pt-4 dark:border-darkMode-violet6 md:flex md:justify-between'>
            <div className='flex flex-col items-center md:mx-10 md:flex-row'>
              <div className='relative -inset-y-9'>
                <div className='relative h-24 w-24 rounded-full shadow-md'>
                  <Image
                    src={user.pfp || '/pp.jpg'}
                    className='rounded-full object-cover object-center'
                    quality={100}
                    priority
                    layout='fill'
                    alt='profile picture'
                  />
                </div>
              </div>
              <div className='ml-0 -mt-9 text-center md:-mt-0 md:ml-3 md:text-left'>
                <p className='ml-1 text-3xl font-semibold text-light-violet12 dark:text-darkMode-violet12'>
                  {user.channelTitle}
                </p>
                <div className='flex flex-col items-center md:flex-row md:items-end'>
                  <button
                    onClick={copy2Clipboard}
                    title='Copy'
                    className='mt-1 h-auto w-36 rounded-full bg-light-violet3 py-1 px-2 hover:bg-light-violet4 active:bg-light-violet5 dark:bg-darkMode-violet3 dark:hover:bg-darkMode-violet4 dark:hover:text-darkMode-gray dark:active:bg-darkMode-violet5 md:mt-1'>
                    <div className='flex items-center justify-between'>
                      <div className='relative h-5 w-5'>
                        <Image src='/ethereum.svg' alt='MetaMask logo' layout='fill' />
                      </div>
                      <p className='h-5 truncate pl-1 text-left text-sm font-semibold opacity-60'>
                        {userAddress}
                      </p>
                    </div>
                  </button>
                  <p className='opacity-85 mt-1 ml-1 text-xs text-light-gray dark:text-darkMode-gray'>
                    Joined:{' '}
                    {user &&
                      new Date(user.createdAt).toLocaleDateString(undefined, options)}
                  </p>
                </div>
                <p className='mx-auto mt-4 w-2/4 pb-5 md:ml-2'>{user.bio}</p>
              </div>
            </div>
            <div className='mr-2 mb-2 -mt-14 flex justify-end md:mt-0 md:mr-10'>
              <Link href='#'>
                <a>
                  <TiSocialYoutubeCircular
                    size={50}
                    className='text-light-gray opacity-80 hover:opacity-60 dark:text-darkMode-gray'
                  />
                </a>
              </Link>
            </div>
          </div>
          <JoinLair />
          <br />
        </div>
      </div>
    </>
  )
}

export default Profile
