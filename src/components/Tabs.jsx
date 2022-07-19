import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { FaDiscord } from 'react-icons/fa'
import { MdWaterDrop } from 'react-icons/md'
import { CgSandClock } from 'react-icons/cg'
import { GiClothes } from 'react-icons/gi'
import { FaPlus } from 'react-icons/fa'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
// const checklist = [
//   'Unlimited projects',
//   'No per user fees',
//   'Unlimited storage',
//   '24/7 support',
//   'Cancel any time',
//   '14 days free',
// ]

function Strategies() {
  return (
    <div>
      <div className='mx-10 '>
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
                        1 ETH
                      </span>
                      <span className='text-cyan-100 mt-2 text-base font-medium'>
                        Per month
                      </span>
                      <span className='sr-only'>plus</span>
                    </span>
                    <span
                      className='pointer-events-none absolute flex h-12 w-full items-center justify-center'
                      aria-hidden='true'>
                      <FaPlus className='h-6 w-6 text-white' aria-hidden='true' />
                    </span>
                    <span>
                      <span className='flex flex-col text-center'>
                        <span className='text-xl font-extrabold tracking-tight text-white md:text-5xl'>
                          0.1 ETH
                        </span>
                        <span className='text-cyan-100 mt-2 text-base font-medium'>
                          Marketplace fee
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
                {/* <ul
                role='list'
                className='grid gap-px overflow-hidden rounded sm:grid-cols-2'>
                {checklist.map((item) => (
                  <li
                    key={item}
                    className='bg-cyan-700 flex items-center bg-opacity-50 py-4 px-4 text-base text-white'>
                    <CheckIcon className='text-cyan-200 h-6 w-6' aria-hidden='true' />
                    <span className='ml-3'>{item}</span>
                  </li>
                ))}
              </ul> */}
                <a
                  href='#'
                  className='flex w-full  items-center justify-center rounded-md bg-mauve py-2 px-8 text-lg font-medium leading-6 text-light-violet1 hover:opacity-80 dark:bg-white dark:text-darkMode-violet1 md:py-4 md:px-10'>
                  Mint contract
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OwnedNft() {
  return <div>2</div>
}

function Activity() {
  return <div>3</div>
}

export default function Tabs() {
  let [categories] = useState({
    Strategies: Strategies(),
    "Nft's": OwnedNft(),
    Activity: Activity(),
  })

  return (
    <div>
      <Tab.Group>
        <div className=''>
          <Tab.List className='bg-gray-200 flex w-full space-x-1 rounded-xl p-1 '>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm font-medium leading-5',
                    'focus:outline-none ',
                    selected
                      ? 'border-b-4 border-darkMode-violet6'
                      : 'hover:bg-light-violet2 hover:brightness-90 dark:hover:bg-darkMode-violet2 dark:hover:brightness-75'
                  )
                }>
                {category}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>
          {Object.values(categories).map((category, idx) => (
            <Tab.Panel className='mt-10 focus:outline-none' key={idx}>
              {category}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
