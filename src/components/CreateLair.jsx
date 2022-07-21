import { FaDiscord } from 'react-icons/fa'
import { MdWaterDrop } from 'react-icons/md'
import { CgSandClock } from 'react-icons/cg'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { createWhaleFactory } from '../util/deployWhale'
import toast from 'react-hot-toast'
import Moralis from 'moralis'
import { useMoralis } from 'react-moralis'

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

export function CreateLair() {
  const { handleSubmit, register } = useForm()
  const { user, enableWeb3, isWeb3Enabled } = useMoralis()

  const deployWhale = async ({ whales, price }) => {
    try {
      let signer
      if (!isWeb3Enabled) {
        const provider = await enableWeb3()
        signer = provider.getSigner()
      }
      // need to pass signer to Factory with dynamic chainId's
      const WhaleFactory = createWhaleFactory(signer)
      const contract = await WhaleFactory.deploy(
        process.env.NEXT_PUBLIC_APP_ADDRESS,
        whales,
        Moralis.web3Library.utils.parseEther(String(price))
      )
      toast.success(`contract address: ${contract.address}`)
      await contract.deployed()
      toast.success(`contract deployed succesfully`)
      user.add('whaleStrategy', contract.address)
      await user.save()
    } catch (err) {
      toast.error('could not deploy contract')
    }
  }

  const onSubmit = (data) => deployWhale(data)

  return (
    <div>
      <div className='mx-10 mt-10'>
        <div className='relative'>
          <div className='absolute inset-0' aria-hidden='true'>
            <div className='inset-y-0 right-0 w-1/2 bg-light-violet9 bg-gradient-to-r from-light-violet8 to-light-violet9 dark:from-darkMode-violet8 dark:to-darkMode-violet9 lg:absolute' />
          </div>
          <div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8'>
            <div className='px-4 sm:px-6 lg:px-0 lg:pr-8'>
              <div className='mx-auto max-w-lg lg:mx-0'>
                <h2 className='text-base font-medium uppercase tracking-wide text-light-violet11 dark:text-darkMode-violet11'>
                  Create Whales Lair
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
            <div className='rounded-lg lg:flex lg:items-center lg:justify-end  lg:px-0 lg:pl-8'>
              <div className='mx-auto mt-8 w-full space-y-8 rounded-lg from-light-violet8 to-light-violet9 p-4 dark:bg-gradient-to-r dark:from-darkMode-violet8 dark:to-darkMode-violet9 lg:mx-0 lg:bg-none'>
                <div className='sm:flex sm:items-start'>
                  <div className='mx-auto mt-3 text-left sm:mt-0'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h2 className='text-3xl font-semibold leading-6 text-light-violet12 dark:text-darkMode-violet12'>
                        Whale Strategy
                      </h2>
                      <div className='mx-auto mt-5 flex flex-col gap-5'>
                        {/* number of whales */}

                        <div>
                          <div>
                            <div className='text-base text-light-violet1 dark:text-darkMode-gray dark:opacity-80'>
                              Maximum amount of whales permitted in the lair in any given
                              moment:
                            </div>
                            <label
                              htmlFor='whales'
                              className='block text-sm font-bold text-light-violet12 dark:text-darkMode-violet12'>
                              Noº whales
                            </label>
                          </div>
                          <div>
                            <input
                              {...register('whales', { required: true })}
                              type='text'
                              name='whales'
                              id='whales'
                              className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 disabled:cursor-not-allowed disabled:opacity-50 dark:border-mauve dark:bg-darkMode-violet2 dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                              placeholder='15'
                            />
                          </div>
                        </div>
                        {/* price */}

                        <div>
                          <div className='text-base text-light-violet1 dark:text-darkMode-gray dark:opacity-80'>
                            Initial cost of entry to the lair (before lair is full):
                          </div>
                          <label
                            htmlFor='price'
                            className='block text-sm font-bold text-light-violet12 dark:text-darkMode-violet12'>
                            Price
                          </label>
                          <div className='relative mt-1 rounded-md shadow-sm'>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                              <span className='flex items-center sm:text-sm'>
                                <Image
                                  width={9}
                                  height={14}
                                  src='/ethereum.svg'
                                  alt='eth'
                                />
                              </span>
                            </div>
                            <input
                              {...register('price', { required: true })}
                              type='text'
                              name='price'
                              id='price'
                              className='w-full rounded-md border-light-bordergray bg-white pl-8 shadow-sm focus:border-light-violet7 focus:ring-light-violet7 disabled:cursor-not-allowed disabled:opacity-50 dark:border-mauve dark:bg-darkMode-violet2 dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                              placeholder='0'
                            />
                            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                              <span className=' sm:text-sm' id='price-currency'>
                                ETH
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <input
                            className='flex w-full  cursor-pointer items-center justify-center rounded-md bg-mauve py-2 px-8 text-lg font-medium leading-6 text-light-violet1 hover:opacity-80 dark:bg-white dark:text-darkMode-violet1 md:py-4 md:px-10'
                            type='submit'
                            value='Deploy Contract'
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
