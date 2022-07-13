import React from 'react'

function Abstract() {
  return (
    <main>
      <div className='pt-28 lg:overflow-hidden'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
              <div className='lg:py-24'>
                <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-mauve dark:text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                  <span className='block'>Dolor excepteur</span>
                  <span className='block text-light-violet11 dark:text-darkMode-violet11'>
                    ut aliquip ut
                  </span>
                </h1>
                <p className='mt-3 text-base text-light-gray dark:text-darkMode-gray sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
              </div>
            </div>
            <div className='mx-auto mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                {/* To fix lightMode asset */}
                <img
                  className='w-full lg:absolute lg:inset-y-0 lg:left-0 h-80 lg:h-full lg:max-w-none'
                  src='/asset.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More main page content here... */}
    </main>
  )
}

export default Abstract
