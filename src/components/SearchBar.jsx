import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar({ xClass }) {
  return (
    <div className={`relative ${xClass} `}>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <AiOutlineSearch className='h-5 w-5 opacity-60' aria-hidden='true' />
      </div>
      {/* TODO: ARIA IDs are not unique */}
      <input
        disabled
        id='search'
        name='search'
        className='h-10 w-full rounded-2xl border-light-bordergray bg-white pl-10 shadow-sm focus:border-light-violet7 focus:ring-light-violet7 disabled:cursor-not-allowed disabled:opacity-50 dark:border-mauve dark:bg-darkMode-violet2 dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
        placeholder='Search for a creator'
        type='search'
      />
    </div>
  )
}

export default SearchBar
