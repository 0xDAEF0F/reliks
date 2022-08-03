export default function EmptyTable() {
  return (
    <div className='mx-auto grid h-80 place-content-center rounded-lg border-2 border-dashed border-darkMode-violet11 p-4'>
      <svg
        className='text-gray-400 mx-auto h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'>
        <path
          vectorEffect='non-scaling-stroke'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
        />
      </svg>
      <h3 className='mt-2 text-sm font-medium text-light-violet11 dark:text-darkMode-violet11'>
        There are no whales in lair.
      </h3>
    </div>
  )
}
