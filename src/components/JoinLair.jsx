import Axios from 'axios'
import { FaDiscord } from 'react-icons/fa'
import { MdWaterDrop } from 'react-icons/md'
import { CgSandClock } from 'react-icons/cg'
import toast from 'react-hot-toast'
import Moralis from 'moralis'
import { useMoralis } from 'react-moralis'
import { abi, createWhaleContract } from '../util/deployWhale'
import useSWR from 'swr'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { LoadingModal } from './LoadingModal'
import { useEffect, useState } from 'react'
const ethers = Moralis.web3Library

const features = [
  {
    name: 'Discord server',
    description:
      "Join your favorite creators' server, and access the exclusive whales-only chat.",
    icon: FaDiscord,
  },
  {
    name: 'NFT drops',
    description: 'Flex your NFT drops granted by Reliqs and your creator.',
    icon: MdWaterDrop,
  },
  {
    name: 'Limited-time Rewards',
    description: 'Unique rewards granted each season.',
    icon: CgSandClock,
  },
]

async function getEthPrice() {
  const response = await Axios.get(
    'https://deep-index.moralis.io/api/v2/erc20/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/price?chain=eth',
    {
      headers: {
        accept: 'application/json',
        'X-API-Key': process.env.NEXT_PUBLIC_MORALIS_API_KEY,
      },
    }
  )
  return Number(response.data.usdPrice)
}

function getLairEntryFetcher(web3Provider) {
  return async (address) => {
    const lairContract = new ethers.Contract(address, abi, web3Provider)
    // LAIR !== FULL
    const isFull = await lairContract.lairFull()
    if (!isFull) return +ethers.utils.formatEther(await lairContract.initialLairEntry())
    // LAIR FULL
    const smallestWhaleIdx = await lairContract.whaleLimit()
    const smallestWhale = await lairContract.whaleArr(smallestWhaleIdx - 1)
    return +ethers.utils.formatEther(smallestWhale.grant)
  }
}

export function JoinLair({ whaleStrategy: { lairAddress, initialLairEntry } }) {
  const { web3 } = useMoralis()
  // TODO: if component is revalidating show another component.
  const { data: lairEntryPrice } = useSWR(lairAddress, getLairEntryFetcher(web3))
  const { data: ethPrice } = useSWR('ethPrice', getEthPrice)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const { user } = useMoralis()
  const [modalOpen, setModalOpen] = useState(false)
  const [currentTxn, setCurrentTxn] = useState({})

  const lairContract = createWhaleContract(lairAddress, web3)

  useEffect(() => {
    if (!lairContract?.provider || !currentTxn.hash) return

    console.log('mounting lairContract listener.')
    lairContract.once(
      lairContract.filters.LogNewWhale(currentTxn.value, user.get('ethAddress')),
      (amount, old, newAddr) => {
        console.log(amount, old, newAddr)
        setCurrentTxn({ ...currentTxn, loading: false })
      }
    )

    return () => {
      console.log('unmounting listener lairContract.')
      lairContract.removeAllListeners('LogNewWhale')
    }
  }, [currentTxn.hash])

  const joinLair = async (value) => {
    try {
      const contract = new ethers.Contract(lairAddress, abi, web3.getSigner())
      const txn = await contract.enterLair({
        value,
      })
      setModalOpen(true)
      setCurrentTxn({ hash: txn.hash, value, loading: true })
    } catch (err) {
      toast.error(`error: ${err.message}`)
      console.error(err)
    }
  }

  return (
    <div>
      <LoadingModal
        open={modalOpen}
        setOpen={setModalOpen}
        txn={currentTxn}
        loading={currentTxn.loading}
      />
      <div className='mx-10'>
        <div className='relative'>
          <div className='absolute inset-0' aria-hidden='true'>
            <div className='inset-y-0 right-0 w-1/2 bg-gradient-to-r from-light-violet8 to-light-violet9 dark:from-darkMode-violet8 dark:to-darkMode-violet9 lg:absolute' />
          </div>
          <div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8'>
            <div className='px-4 sm:px-6 lg:px-0 lg:pr-8'>
              <div className='mx-auto max-w-lg lg:mx-0'>
                <h2 className='text-base font-medium uppercase tracking-wide text-light-violet11 dark:text-darkMode-violet11'>
                  Whales Lair
                </h2>
                <p className='text-gray-900 mt-2 text-2xl font-semibold sm:text-3xl'>
                  Benefits
                </p>
                <dl className='mt-12 space-y-10'>
                  {features.map((feature) => (
                    <div key={feature.name} className='relative'>
                      <dt>
                        <div className='absolute flex h-12 w-12 items-center justify-center  rounded-lg bg-gradient-to-r from-light-violet8 to-light-violet9 object-cover dark:from-darkMode-violet8 dark:to-darkMode-violet9 '>
                          <feature.icon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </div>
                        <p className='ml-16 text-lg font-medium leading-6 text-darkMode-violet10'>
                          {feature.name}
                        </p>
                      </dt>
                      <dd className='mt-2 ml-16 text-base text-light-gray opacity-75 dark:text-darkMode-gray'>
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className='mt-10 lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8'>
              <div className='mx-auto w-full max-w-lg rounded-lg bg-gradient-to-r from-light-violet8 to-light-violet9 p-6 pb-3 dark:from-darkMode-violet8 dark:to-darkMode-violet9 md:p-4 lg:mx-0 lg:bg-none'>
                <div className='mb-5 py-1'>
                  <h2 className='sr-only'>Price</h2>
                  <p className='relative grid grid-cols-2'>
                    <span className='text-cyan-100 flex flex-col text-center font-medium'>
                      <span className='mb-2 text-3xl font-extrabold  tracking-tight text-white md:text-5xl'>
                        {lairEntryPrice || initialLairEntry}
                      </span>
                      Min ETH
                      <br />
                      to Enter Lair
                    </span>
                    <span className='absolute flex h-12 w-full items-center justify-center text-3xl text-white md:text-5xl'>
                      ≈
                    </span>
                    <span>
                      <span className='flex flex-col text-center'>
                        <span className='text-3xl font-extrabold tracking-tight text-white md:text-5xl'>
                          {(
                            (lairEntryPrice || initialLairEntry) * ethPrice
                          ).toLocaleString('us', {
                            maximumFractionDigits: 0,
                          })}
                        </span>
                        <span className='text-cyan-100 mt-2 text-base font-medium'>
                          USD
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
                {/* Amount To Join Lair */}
                <form
                  onSubmit={handleSubmit((a) =>
                    joinLair(ethers.utils.parseEther(a.price))
                  )}>
                  <label
                    htmlFor='price'
                    className='mb-2 block text-sm font-medium text-white'>
                    Enter Amount*
                  </label>
                  <div className='relative mt-1 w-full rounded-2xl border-light-bordergray bg-white pl-10 shadow-sm focus:border-light-violet7 focus:ring-light-violet7 disabled:cursor-not-allowed disabled:opacity-50 dark:border-mauve dark:bg-darkMode-violet2 dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
                      <Image width={9} height={14} src='/ethereum.svg' alt='eth' />
                    </div>
                    <input
                      {...register('price', {
                        required: true,
                        min: lairEntryPrice || initialLairEntry,
                      })}
                      name='price'
                      id='price'
                      type='number'
                      step='.1'
                      className='block w-full rounded-2xl border-light-bordergray bg-white pr-12 shadow-sm focus:border-light-violet7 focus:ring-light-violet7 disabled:cursor-not-allowed disabled:opacity-50 dark:border-mauve dark:bg-darkMode-violet2  dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                      placeholder={lairEntryPrice || initialLairEntry}
                      aria-describedby='price-currency'
                    />
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                      <span className='text-gray-500  sm:text-sm' id='price-currency'>
                        ETH
                      </span>
                    </div>
                  </div>
                  {/* error whale number */}
                  {errors.price && (
                    <p className='mt-2 rounded-md border-2 border-error bg-darkMode-violet3 py-1 text-center text-sm font-semibold text-error'>
                      Amount must be greater than {lairEntryPrice}
                    </p>
                  )}
                  <input
                    className='mt-4 flex w-full  items-center justify-center rounded-md bg-mauve py-2 px-8 text-lg font-medium leading-6 text-light-violet1 hover:opacity-80 dark:bg-white dark:text-darkMode-violet1 md:py-4 md:px-10'
                    type='submit'
                    value='Join Lair'
                    id='price'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
