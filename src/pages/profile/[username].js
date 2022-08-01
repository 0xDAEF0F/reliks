import Header from '../../components/Header'
import SignUpAsCreatorBanner from '../../components/SignUpAsCreatorBanner'
import { useRouter } from 'next/router'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { CreateLair } from '../../components/CreateLair'
import NoStrategies from '../../components/NoStrategies'
import { JoinLair } from '../../components/JoinLair'
import { useMoralis } from 'react-moralis'
import { getAllUsernames, getCreatorInformation } from '../../util/getLastCreators'
import JoinedLair from '../../components/JoinedLair'
import Dashboard from '../../components/Dashboard'
import { useEffect } from 'react'

export const SkeletonBanner = () => {
  return (
    <>
      <div className='flex h-24 w-full md:h-64'>
        <div className='w-full animate-pulse rounded-lg rounded-b-none bg-light-violet3  dark:bg-darkMode-bordergray dark:opacity-20'></div>
      </div>
    </>
  )
}

export const SkeletonPP = () => {
  return (
    <>
      <div className='mt-2 flex h-24 md:mt-4'>
        <div className='w-full animate-pulse rounded-full bg-light-violet3  dark:bg-darkMode-bordergray dark:opacity-20'></div>
      </div>
    </>
  )
}

export const SkeletonText = () => {
  return (
    <>
      <div className='mb:mt-0 mt-1 flex h-8 w-full animate-pulse justify-center rounded-full bg-light-violet3 dark:bg-darkMode-bordergray  dark:opacity-20 md:w-4/5'></div>
    </>
  )
}

export default function Profile({ creator }) {
  const router = useRouter()
  const { user, web3, enableWeb3 } = useMoralis()

  useEffect(() => {
    if (!web3) enableWeb3()
  }, [])

  function copy2Clipboard() {
    navigator.clipboard.writeText(creator.ethAddress)
    toast.success('Address copied to clipboard.')
  }

  const options = { year: 'numeric', month: 'long' }

  function calculateSideComponent() {
    const isUserTheCreator = user && user.getUsername() === router.query.username
    const doesCreatorHaveLair = creator?.whaleStrategy?.length

    if (!isUserTheCreator && !doesCreatorHaveLair) return 1
    if (!isUserTheCreator && doesCreatorHaveLair) return 2
    if (isUserTheCreator && !user.get('whaleStrategy')?.lairAddress) return 3
    if (isUserTheCreator && user.get('whaleStrategy')?.lairAddress) return 4
  }

  const SideComponent = () => {
    switch (calculateSideComponent()) {
      case 1:
        // POV USER -- CREATOR STRATEGY FALSE
        return <NoStrategies />
      case 2:
        // POV USER -- CREATOR STRATEGY TRUE
        return <JoinLair whaleStrategy={creator?.whaleStrategy} />
      case 3:
        // POV CREATOR -- CREATOR STRATEGY FALSE
        return <CreateLair />
      case 4:
        // POV CREATOR -- CREATOR STRATEGY TRUE
        return <JoinLair whaleStrategy={user.get('whaleStrategy')} />
      // return <Dashboard />
      case 5:
        // POV USER -- JOINED STRATEGY
        return <JoinedLair />
    }
  }

  return (
    <>
      <Header />
      <SignUpAsCreatorBanner xclass='hidden' />
      <div className='mx-auto max-w-6xl py-20 '>
        <div className='relative rounded-lg rounded-b-lg border border-light-bordergray bg-light-violet2 shadow-sm dark:border-darkMode-violet6 dark:bg-darkMode-violet2'>
          <div className='block rounded-lg md:rounded-md md:px-8 md:pt-4'>
            {creator?.coverPhoto ? (
              <Image
                src={creator?.coverPhoto}
                width={1000}
                height={220}
                quality={100}
                priority
                className='rounded-md object-cover object-center'
                layout='responsive'
                alt='banner'
              />
            ) : (
              <SkeletonBanner />
            )}
          </div>
          <div className='mx-auto h-full items-start border-b border-dotted border-light-violet6 pt-4 dark:border-darkMode-violet6 md:flex md:justify-between'>
            <div className='flex flex-col items-center md:mx-10 md:flex-row'>
              <div className='relative -inset-y-9'>
                <div className='relative h-24 w-24 rounded-full shadow-md'>
                  {creator?.pfp ? (
                    <Image
                      src={creator?.pfp}
                      className='rounded-full object-cover object-center'
                      quality={100}
                      priority
                      layout='fill'
                      alt='profile picture'
                    />
                  ) : (
                    <SkeletonPP />
                  )}
                </div>
              </div>
              <div className='ml-0 -mt-9 text-center md:-mt-1 md:ml-3 md:text-left'>
                <div className='ml-1 text-3xl font-semibold text-light-violet12 dark:text-darkMode-violet12'>
                  {creator?.channelTitle ? creator?.channelTitle : <SkeletonText />}
                </div>
                <div className='flex flex-col items-center md:flex-row md:items-end'>
                  <button
                    onClick={copy2Clipboard}
                    title='Copy'
                    className='ml-1 mt-1 h-6 w-36 rounded-full bg-light-violet3 px-2 hover:bg-light-violet4 active:bg-light-violet5 dark:bg-darkMode-violet3 dark:hover:bg-darkMode-violet4 dark:hover:text-darkMode-gray dark:active:bg-darkMode-violet5 md:mt-1'>
                    <div className='flex items-center justify-between'>
                      <div className='block'>
                        <Image
                          src='/ethereum.svg'
                          height={14}
                          width={14}
                          alt='MetaMask logo'
                          layout='fixed'
                        />
                      </div>
                      <p className='truncate pl-1 text-left text-sm font-semibold opacity-60'>
                        {creator.ethAddress}
                      </p>
                    </div>
                  </button>
                  <div className='opacity-85 mt-1 ml-1 text-xs text-light-gray dark:text-darkMode-gray'>
                    {creator?.createdAt ? (
                      <>
                        <span>Joined: </span>
                        <span>
                          {creator &&
                            new Date(creator?.createdAt).toLocaleDateString(
                              undefined,
                              options
                            )}
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>
                {creator?.bio ? (
                  <p className='mx-auto mt-4 w-2/4 pb-5 md:ml-2'>{creator?.bio}</p>
                ) : (
                  <div className='pb-10 md:ml-2'>
                    <br />
                  </div>
                )}
              </div>
            </div>
            <div className='mr-2 mb-2 -mt-14 flex justify-end md:mt-0 md:mr-10'>
              <a
                target='_blank'
                rel='noreferrer'
                href={`https://www.youtube.com/channel/${creator.channelId}`}>
                <TiSocialYoutubeCircular
                  size={50}
                  className='text-light-gray opacity-80 hover:opacity-60 dark:text-darkMode-gray'
                />
              </a>
            </div>
          </div>
          {SideComponent()}
          <br />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const username = params.username
  const userData = await getCreatorInformation(username)
  return {
    props: {
      creator: userData,
    },
  }
}

export async function getStaticPaths() {
  const usernames = await getAllUsernames()
  return {
    paths: usernames,
    fallback: false,
  }
}
