import Header from '../components/Header'
import Image from 'next/image'

const creators = [
  {
    id: 1,
    name: 'Creator 1',
    joined: 'Joined: July 2022',
    href: '#',
    profilePictureSrc: '/pp.jpg',
    profilePictureAlt: '',
    bannerSrc: '/wp.png',
    bannerAlt: '',
  },
  {
    id: 2,
    name: 'Creator 2',
    joined: 'Joined: July 2022',
    href: '#',
    profilePictureSrc: '/pp.jpg',
    profilePictureAlt: '',
    bannerSrc: '/wp.png',
    bannerAlt: '',
  },
  {
    id: 3,
    name: 'Creator 3',
    joined: 'Joined: July 2022',
    href: '#',
    profilePictureSrc: '/pp.jpg',
    profilePictureAlt: '',
    bannerSrc: '/wp.png',
    bannerAlt: '',
  },
]

export default function explore() {
  return (
    <>
      <Header />
      <div className='max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 id='products-heading' className='text-4xl font-semibold my-5'>
          Explore Creators
        </h2>

        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8'>
          {creators.map((creator) => (
            <a
              key={creator.id}
              href={creator.href}
              className='bg-light-violet2 dark:bg-darkMode-violet2 shadow-md rounded-md hover:opacity-80'>
              <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3'>
                <Image
                  src={creator.bannerSrc}
                  width={800}
                  height={400}
                  alt={creator.imageAlt}
                  className='w-full h-full object-center object-cover'
                />
              </div>
              <div className='relative -inset-5 -mb-3'>
                <div className='ml-10 flex items-center '>
                  <div className='pt-1 px-1 dark:bg-black bg-white rounded-lg shadow-md'>
                    <Image
                      src={creator.profilePictureSrc}
                      className='w-full h-full object-center object-cover rounded-lg'
                      width={80}
                      height={80}
                      alt={creator.profilePictureAlt}
                    />
                  </div>
                  <div className='mt-2 ml-2'>
                    <p className='text-xl text-light-violet12 dark:text-darkMode-violet12 font-bold'>
                      {creator.name}
                    </p>
                    <p className='text-xs text-light-gray dark:text-darkMode-gray'>
                      {creator.joined}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
