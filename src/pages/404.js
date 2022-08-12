import Header from '../components/Header'
import Link from 'next/link'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function FourZeroFour() {
  return (
    <>
      <Head>
        <title>404 | reliks</title>
      </Head>
      <Header />
      <div className='min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-extrabold text-light-violet11 dark:text-darkMode-violet11 sm:text-5xl'>
              404
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-light-bordergray sm:pl-6 dark:sm:border-darkMode-bordergray'>
                <h1 className='text-4xl font-extrabold tracking-tight text-mauve dark:text-white sm:text-5xl'>
                  Page not found
                </h1>
                <p className='text-fourth mt-1 text-base text-light-gray dark:text-darkMode-gray'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='sm:border-transparent mt-10 flex space-x-3 sm:pl-6'>
                <Link href='/'>
                  <a className='inline-flex items-center rounded-md bg-light-violet9 px-4 py-2 text-sm font-bold text-white hover:bg-light-violet10  dark:bg-darkMode-violet9 dark:hover:bg-darkMode-violet10'>
                    Go back home
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}
