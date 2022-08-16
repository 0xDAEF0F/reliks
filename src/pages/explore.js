import Header from '../components/Header'
import Image from 'next/image'
import { getLastCreators } from '../util/getLastCreators'
import { NoCreators } from '../components/NoCreators'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function explore({ creators }) {
  return (
    <>
      <Head>
        <title>Explore | reliks</title>
        <meta
          name='description'
          content='Check out your favorite content creators subscribed to reliks, and be part of the ecosystem.'
        />
      </Head>
      <Header />
      <div className='mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6  md:pt-24  lg:max-w-7xl lg:px-8 '>
        <h1 id='products-heading' className='mb-12 text-4xl font-semibold'>
          Explore Creators
        </h1>
        {creators.length > 0 ? (
          <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 2xl:grid-cols-4'>
            {creators.map((creator, i) => (
              <a
                key={i}
                href={`/profile/${creator.username}`}
                className='rounded-md bg-light-violet2 shadow-md hover:opacity-80 dark:bg-darkMode-violet2'>
                <div className='w-full overflow-hidden rounded-lg'>
                  <Image
                    src={creator.coverPhoto}
                    width={800}
                    height={400}
                    alt='cover photo from social network.'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <div className='relative -inset-5 -mb-3'>
                  <div className='ml-10 flex items-center '>
                    <div className='rounded-lg bg-white px-1 pt-1 shadow-md dark:bg-black'>
                      <Image
                        src={creator.pfp}
                        className='h-full w-full rounded-lg object-cover object-center'
                        width={80}
                        height={80}
                        alt='profile picture from social network'
                      />
                    </div>
                    <div className='mt-2 ml-2'>
                      <h2 className='text-xl font-bold text-light-violet12 dark:text-darkMode-violet12'>
                        {creator.name}
                      </h2>
                      <p className='text-xs text-light-gray dark:text-darkMode-gray'>
                        Joined: {creator.createdAt}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <NoCreators />
        )}
      </div>
      <div className='h-20' />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const creators = await getLastCreators(3)
  return {
    props: {
      creators,
    },
    revalidate: 60,
  }
}
