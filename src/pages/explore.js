import Header from '../components/Header'
import Image from 'next/image'
import { getLastCreators } from '../util/getLastCreators'
import { NoCreators } from '../components/NoCreators'

import Footer from '../components/Footer'

export default function explore({ creators }) {
  return (
    <>
      <Header />
      <div className='mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6  md:pt-24  lg:max-w-7xl lg:px-8 '>
        <h2 id='products-heading' className='mb-12 text-4xl font-semibold'>
          Explore Creators
        </h2>
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
                    // TODO: CHANGE
                    alt='temporary alt'
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
                        // TODO: CHANGE
                        alt='temporary alt'
                      />
                    </div>
                    <div className='mt-2 ml-2'>
                      <p className='text-xl font-bold text-light-violet12 dark:text-darkMode-violet12'>
                        {creator.name}
                      </p>
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
      <br />
      <br />
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
  }
}
