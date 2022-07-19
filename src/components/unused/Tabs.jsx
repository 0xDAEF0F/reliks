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
  return <div>1</div>
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
