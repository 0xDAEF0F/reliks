import { Tab } from '@headlessui/react'
import LairTable from './LairTable'
import { JoinLair } from './JoinLair'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsUser({ lairInfo }) {
  const categories = {
    Join: <JoinLair lairInfo={lairInfo} />,
    Lair: <LairTable lairInfo={lairInfo} />,
  }

  return (
    <Tab.Group>
      <Tab.List className='flex w-full space-x-1'>
        {Object.keys(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-medium leading-5',
                'focus:outline-none ',
                selected
                  ? 'border-b-4 border-darkMode-violet6 text-light-violet11 dark:text-darkMode-violet11'
                  : 'hover:bg-light-violet2 hover:brightness-90 dark:hover:bg-darkMode-violet2 dark:hover:brightness-75'
              )
            }>
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {Object.values(categories).map((category, idx) => (
          <Tab.Panel className='mt-1 focus:outline-none' key={idx}>
            {category}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
