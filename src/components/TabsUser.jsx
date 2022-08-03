import { useState } from 'react'
import { Tab } from '@headlessui/react'
import LairTable from './LairTable'
import { JoinLair } from './JoinLair'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsUser({ creator }) {
  let [categories] = useState({
    Join: <JoinLair whaleStrategy={creator?.whaleStrategy} />,
    Lair: LairTable(),
  })

  return (
    <div>
      <Tab.Group>
        <div className='mb-5'>
          <Tab.List className='flex w-full space-x-1 p-1'>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm font-medium leading-5',
                    'focus:outline-none ',
                    selected
                      ? 'border-b-4 border-darkMode-violet6 text-darkMode-violet11'
                      : 'dark:hover:brightness-40 text-darkMode-gray hover:bg-light-violet2 hover:text-darkMode-violet11 hover:brightness-90 dark:text-opacity-75 dark:hover:bg-darkMode-violet2'
                  )
                }>
                {category}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>
          {Object.values(categories).map((category, idx) => (
            <Tab.Panel className='mt-1 focus:outline-none' key={idx}>
              {category}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
