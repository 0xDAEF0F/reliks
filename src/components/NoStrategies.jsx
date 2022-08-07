import { BenefitsLairPanel } from './BenefitsLairPanel'

export default function NoStrategies() {
  return (
    <div>
      <div className='relative'>
        <div className='absolute inset-0' aria-hidden='true'>
          <div className='inset-y-0 right-0 w-1/2 bg-gradient-to-r from-light-violet8 to-light-violet9 dark:from-darkMode-violet8 dark:to-darkMode-violet9 lg:absolute' />
        </div>
        <div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8'>
          <BenefitsLairPanel />
          <div className='lg:flex lg:items-center lg:justify-end  lg:px-0 lg:pl-8'>
            <div className='mx-auto mt-8 w-full max-w-lg space-y-8 rounded-lg bg-gradient-to-r from-light-violet8 to-light-violet9 p-4 dark:from-darkMode-violet8 dark:to-darkMode-violet9 lg:mx-0 lg:bg-none'>
              <div className='mx-auto max-w-3xl rounded-lg border-2 border-dashed border-light-violet12 p-12 text-center dark:border-darkMode-violet12'>
                <svg
                  className='mx-auto h-12 w-12'
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
                <h3 className='mt-2 text-sm font-medium text-light-violet1 dark:text-darkMode-violet12'>
                  Creator has not created Lair.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
