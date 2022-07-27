import Axios from 'axios'
import { FaDiscord } from 'react-icons/fa'
import { MdWaterDrop } from 'react-icons/md'
import { CgSandClock } from 'react-icons/cg'
import toast from 'react-hot-toast'
import Moralis from 'moralis'
import { useMoralis } from 'react-moralis'
import { abi } from '../util/deployWhale'
import useSWR from 'swr'
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
    if (!isFull) return lairContract.initialLairEntry()
    // LAIR FULL
    const smallestWhaleIdx = await lairContract.whaleLimit()
    const smallestWhale = await lairContract.whaleArr(smallestWhaleIdx - 1)
    return smallestWhale.grant
  }
}

// pass this function to SWR with a provider and you have
// a fetcher that can call any contract.
// function contractFetcher(provider) {
//   return (...args) => {
//     const [addr, abi, methodToCall, ...rest] = args
//     const contract = new ethers.Contract(addr, abi, provider)
//     return contract[methodToCall](...rest)
//   }
// }

export function JoinLair({ lairAddr }) {
  const { web3 } = useMoralis()
  // TODO: if component is revalidating show another component.
  const { data: lairEntryPrice } = useSWR(lairAddr, getLairEntryFetcher(web3))
  const { data: ethPrice } = useSWR('ethPrice', getEthPrice)

  // DEBUG: You can call any contract with this snippet
  // const { data } = useSWR(
  //   // substitute isWhale for a method name and address for args.
  //   [lairAddr, abi, 'isWhale', '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'],
  //   contractFetcher(web3)
  // )

  const joinLair = async () => {
    try {
      const contract = new ethers.Contract(lairAddr, abi, web3.getSigner())
      const txn = await contract.enterLair({
        value: lairEntryPrice,
      })
      toast.success(`TXN: ${txn.hash}`)
      console.log(txn)
    } catch (err) {
      toast.error(`error: ${err.message}`)
      console.error(err)
    }
  }

  return (
    <div>
      <div className='mx-10 mt-10'>
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
            <div className='lg:flex lg:items-center lg:justify-end  lg:px-0 lg:pl-8'>
              <div className='mx-auto mt-8 w-full max-w-lg space-y-8 rounded-lg bg-gradient-to-r from-light-violet8 to-light-violet9 p-4 dark:from-darkMode-violet8 dark:to-darkMode-violet9 lg:mx-0 lg:bg-none'>
                <div>
                  <h2 className='sr-only'>Price</h2>
                  <p className='relative grid grid-cols-2'>
                    <span className='flex flex-col text-center'>
                      <span className='text-xl font-extrabold  tracking-tight text-white md:text-5xl'>
                        {lairEntryPrice && ethers.utils.formatEther(lairEntryPrice)}
                      </span>
                      <span className='text-cyan-100 mt-2 text-base font-medium'>
                        Creator Fee (ETH)
                      </span>
                      <br />
                    </span>
                    <span className='absolute flex h-12 w-full items-center justify-center text-5xl text-white'>
                      ≈
                    </span>
                    <span>
                      <span className='flex flex-col text-center'>
                        <span className='text-xl font-extrabold tracking-tight text-white md:text-5xl'>
                          {lairEntryPrice &&
                            ethPrice &&
                            (
                              +ethers.utils.formatEther(lairEntryPrice) * ethPrice
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
                <a
                  onClick={joinLair}
                  href='#'
                  className='flex w-full  items-center justify-center rounded-md bg-mauve py-2 px-8 text-lg font-medium leading-6 text-light-violet1 hover:opacity-80 dark:bg-white dark:text-darkMode-violet1 md:py-4 md:px-10'>
                  Join Lair
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
