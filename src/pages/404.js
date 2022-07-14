import Header from '../components/Header'
import Link from 'next/link'

export default function FourZeroFour() {
  return (
    <>
      <Header />
      <div className='min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='max-w-max mx-auto'>
          <main className='sm:flex'>
            <p className='text-4xl text-light-violet11 dark:text-darkMode-violet11 font-extrabold sm:text-5xl'>
              404
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-light-bordergray dark:sm:border-darkMode-bordergray sm:pl-6'>
                <h1 className='text-4xl text-mauve dark:text-white font-extrabold tracking-tight sm:text-5xl'>
                  Page not found
                </h1>
                <p className='mt-1 text-base text-light-gray dark:text-darkMode-gray text-fourth'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-transparent sm:pl-6'>
                <Link href='/'>
                  <a className='text-white bg-light-violet9 hover:bg-light-violet10 dark:bg-darkMode-violet9 dark:hover:bg-darkMode-violet10 font-bold inline-flex items-center px-4 py-2  text-sm rounded-md'>
                    Go back home
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
