import { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'
import { TbArrowUpRight } from 'react-icons/tb'
import { BiLinkAlt } from 'react-icons/bi'
import Header from '../../components/Header'
import { CreateLair } from '../../components/CreateLair'
import NoStrategies from '../../components/NoStrategies'
import LairTable from '../../components/LairTable'
import TabsUser from '../../components/TabsUser'
import { getAllUsernames, getCreatorInformation } from '../../util/getLastCreators'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { createWhaleFactory } from '../../util/deployWhale'
import { CreateLairLoadingModal } from '../../components/CreateLairLoadingModal'
import { ethers } from '../../util/deployWhale'
import Footer from '../../components/Footer'

export default function Profile({ creator }) {
  const router = useRouter()
  const { user, web3, enableWeb3, setUserData } = useMoralis()
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentTxn, setCurrentTxn] = useState({})

  useEffect(() => {
    if (!web3) enableWeb3()
  }, [web3, enableWeb3])

  function copy2Clipboard() {
    navigator.clipboard.writeText(creator.ethAddress)
    toast.success('Address copied to clipboard.')
  }

  function calculateSideComponent() {
    const isUserTheCreator = user && user.getUsername() === router.query.username
    const doesCreatorHaveLair = creator.whaleStrategy?.lairAddress

    if (!isUserTheCreator && !doesCreatorHaveLair) return 1
    if (!isUserTheCreator && doesCreatorHaveLair) return 2
    if (isUserTheCreator && !user.get('whaleStrategy')?.lairAddress) return 3
    if (isUserTheCreator && user.get('whaleStrategy')?.lairAddress) return 4
  }

  async function deployLair({ whales, price }) {
    try {
      const WhaleFactory = createWhaleFactory(web3.getSigner())
      const contract = await WhaleFactory.deploy(
        process.env.NEXT_PUBLIC_APP_ADDRESS,
        whales,
        ethers.utils.parseEther(String(price))
      )

      setModalOpen(true)

      setCurrentTxn({
        loading: true,
        lairAddress: contract.address,
        error: false,
        hash: contract.deployTransaction.hash,
      })

      await contract.deployed()

      toast.success(`contract deployed succesfully`)

      setCurrentTxn({
        loading: false,
        lairAddress: contract.address,
        error: false,
        hash: contract.deployTransaction.hash,
      })

      // TODO: Need to make a model for this lair information
      await setUserData({
        whaleStrategy: {
          lairAddress: contract.address,
          initialLairEntry: +price,
          whaleCount: whales,
        },
      })
    } catch (err) {
      setCurrentTxn((prev) => ({ ...prev, error: true }))
      toast.error('could not deploy contract')
    }
  }

  const SideComponent = () => {
    switch (calculateSideComponent()) {
      case 1:
        // POV USER -- CREATOR STRATEGY FALSE
        return <NoStrategies />
      case 2:
        // POV USER -- CREATOR STRATEGY TRUE
        return <TabsUser lairInfo={creator.whaleStrategy} />
      case 3:
        // POV CREATOR -- CREATOR STRATEGY FALSE
        return <CreateLair deployLair={deployLair} />
      case 4:
        // POV CREATOR -- CREATOR STRATEGY TRUE
        return <LairTable lairInfo={creator.whaleStrategy} />
      case 5:
        // POV USER -- JOINED STRATEGY (To do: add another tab for a joined user )
        return <LairTable lairInfo={creator.whaleStrategy} />
    }
  }

  return (
    <>
      <CreateLairLoadingModal
        currentTxn={currentTxn}
        open={isModalOpen}
        setOpen={setModalOpen}
      />
      <Header />
      <div className='mx-auto max-w-6xl py-20 '>
        <div className='relative rounded-lg rounded-b-lg border border-light-bordergray bg-light-violet2 shadow-sm dark:border-darkMode-violet6 dark:bg-darkMode-violet2'>
          <div className='block rounded-lg md:rounded-md md:px-8 md:pt-4'>
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
          </div>
          <div className='mx-auto h-full items-start border-b border-dotted border-light-violet6 pt-4 dark:border-darkMode-violet6 md:flex md:justify-between'>
            <div className='flex flex-col items-center md:mx-8 md:flex-row'>
              <div className='relative -inset-y-9'>
                <div className='rounded-full border border-light-violet5 border-opacity-50 bg-light-violet1 p-2 dark:border-darkMode-violet5  dark:border-opacity-100 dark:bg-darkMode-violet1'>
                  <div className='relative h-24 w-24 rounded-full'>
                    <Image
                      src={creator?.pfp}
                      className='rounded-full object-cover object-center'
                      quality={100}
                      priority
                      layout='fill'
                      alt='profile picture'
                    />
                  </div>
                </div>
              </div>
              <div className='ml-0 -mt-9 text-center md:-mt-1 md:ml-3 md:text-left'>
                <div className='ml-1 text-3xl font-semibold text-light-violet12 dark:text-darkMode-violet12'>
                  {creator?.channelTitle}
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
                            new Date(creator?.createdAt).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'long',
                            })}
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>
                {creator?.bio ? (
                  <p className='mx-auto mt-4 mb-10 w-3/4 md:ml-2'>{creator?.bio}</p>
                ) : (
                  <div className='pb-10 md:ml-2'>
                    <br />
                  </div>
                )}
              </div>
            </div>
            <div className='mr-1 mb-2 -mt-4 flex justify-end text-light-gray opacity-80 hover:text-light-violet11 dark:text-darkMode-gray dark:hover:text-darkMode-violet11 md:mt-0 md:mr-8'>
              <a
                target='_blank'
                className='group flex items-center gap-1'
                rel='noreferrer'
                href={`https://www.youtube.com/channel/${creator.channelId}`}>
                <BiLinkAlt size={18} />
                <span className='text-sm font-semibold'>Youtube</span>
                <TbArrowUpRight className='invisible group-hover:visible' size={17} />
              </a>
            </div>
          </div>
          {SideComponent()}
        </div>
      </div>
      <Footer />
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
