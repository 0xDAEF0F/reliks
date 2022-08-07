import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { MdWaterDrop } from 'react-icons/md'
import { CgSandClock } from 'react-icons/cg'

const features = [
  {
    name: 'Discord server',
    description:
      "Join your favorite creators' server, and access the exclusive whales-only chat.",
    icon: FaDiscord,
  },
  {
    name: 'NFT drops',
    description: 'Flex your NFT drops granted by Reliks and your creator.',
    icon: MdWaterDrop,
  },
  {
    name: 'Limited-time Rewards',
    description: 'Unique rewards granted each season.',
    icon: CgSandClock,
  },
]

export function BenefitsLairPanel() {
  return (
    <div className='mb-10 mt-5 px-4 sm:px-6 lg:px-0 lg:pr-8'>
      <div className='mx-auto max-w-lg lg:mx-0'>
        <h2 className='text-base font-medium uppercase tracking-wide text-light-violet11 dark:text-darkMode-violet11'>
          The Lair
        </h2>
        <p className='text-gray-900 mt-2 text-2xl font-semibold sm:text-3xl'>Benefits</p>
        <dl className='mt-12 space-y-10'>
          {features.map((feature) => (
            <div key={feature.name} className='relative'>
              <dt>
                <div className='absolute flex h-12 w-12 items-center justify-center  rounded-lg bg-gradient-to-r from-light-violet8 to-light-violet9 object-cover dark:from-darkMode-violet8 dark:to-darkMode-violet9 '>
                  <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
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
  )
}
