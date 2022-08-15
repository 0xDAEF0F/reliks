import React from 'react'
import { Switch } from '@headlessui/react'

function SwitchToggle({ checked, onChange }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Switch
      checked={checked}
      onChange={() => onChange()}
      className='relative inline-flex h-5 w-10 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-light-violet7 focus:ring-offset-2 dark:focus:ring-darkMode-violet7'>
      <span
        aria-hidden='true'
        className='pointer-events-none absolute h-full w-full rounded-md'
      />
      <span
        aria-hidden='true'
        className={classNames(
          checked === 'dark' ? 'bg-darkMode-violet9' : 'bg-black',
          'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
        )}
      />
      <span
        aria-hidden='true'
        className={classNames(
          checked === 'dark' ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-black bg-white shadow ring-0 transition-transform duration-200 ease-in-out dark:border-darkMode-violet7'
        )}
      />
    </Switch>
  )
}

export default SwitchToggle
