import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Lair() {
  // Show the current count of the lair, users data, current lair entry price.
  return <div>2</div>
}

function Discord() {
  // Show some discord server data and button with discord server invitation.
  return <div>1</div>
}

function Drops() {
  // Airdrop a NFT to all the lair by only submiting the image source and metadata.
  return <div>2</div>
}

export default function TabsUser() {
  let [categories] = useState({
    Lair: Lair(),
    Discord: Discord(),
    Drops: Drops(),
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
