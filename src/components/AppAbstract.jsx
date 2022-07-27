import { useEffect, useState } from 'react'
import Link from 'next/link'
import { GiSpermWhale, GiOpenTreasureChest } from 'react-icons/gi'
import { TbBadges, TbArrowNarrowDown } from 'react-icons/tb'
import { useTheme } from 'next-themes'

const strategies = [
  {
    name: 'Whales Lair',
    href: '#',
    description:
      "Immerse within your creators' whale-exclusive discord chat room and enjoy whale-only benefits.",
    comingSoon: false,
    icon: GiSpermWhale,
  },
  {
    name: 'Badges',
    href: '#',
    description: "Badges symbolize achievements earned within your creators' ecosystem.",
    comingSoon: true,
    icon: TbBadges,
  },
  {
    name: 'Chests',
    href: '#',
    description:
      'Chests grant you gems you can sell, trade, and exchange for limited time prizes.',
    comingSoon: true,
    icon: GiOpenTreasureChest,
  },
]
export function AppAbstract() {
  const [top, setTop] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <main>
      <div className='mb-10 pt-24 lg:overflow-hidden'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left'>
              <div className='lg:py-24'>
                <h1 className='mt-4 text-4xl font-extrabold tracking-tight text-mauve dark:text-darkMode-violet12 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                  <span className='block'>Unite with</span>
                  <span className='block text-light-violet11 dark:text-darkMode-violet11'>
                    your favorite creator.
                  </span>
                </h1>
                <p className='mt-3 mb-2 text-base text-light-gray dark:text-darkMode-gray sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  Reliqs is a platform for content creators to connect with their fan
                  base, get supported, and in return, grant rewards in the form of NFTs
                  and token drops.
                </p>

                <Link href='https://alkaline-ceres-b4f.notion.site/Light-Paper-8e94cdbc4d944705aed046465d4de9ea'>
                  <a
                    target='_blank'
                    className='text-xl text-light-violet10 hover:text-light-violet11 dark:text-darkMode-violet10 dark:hover:text-darkMode-violet11'>
                    Lite Paper&nbsp;&rarr;
                  </a>
                </Link>
              </div>
            </div>
            <div className='mx-auto mt-12 lg:relative lg:m-0'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                {/* To fix lightMode asset */}
                <img
                  className='h-80 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-max lg:max-w-none'
                  src={theme === 'dark' ? 'asset.svg' : 'assetlm.svg'}
                  alt=''
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              !top
                ? 'invisible'
                : 'flex animate-pulse flex-col items-center transition duration-1000 ease-in-out'
            }`}>
            <p>Scroll down to see more</p>
            <TbArrowNarrowDown />
          </div>
          <div className='mt-28'>
            <div className='relative pb-32'>
              <div className='absolute inset-0'>
                <div className='h-full w-full rounded-lg bg-light-violet9 object-cover dark:bg-gradient-to-r dark:from-darkMode-violet8  dark:to-darkMode-violet9' />
                <div className='inset-0mix-blend-multiply absolute' aria-hidden='true' />
              </div>
              <div className='relative mx-auto max-w-7xl py-12 px-4 sm:py-20 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-extrabold tracking-tight text-light-violet1 dark:text-darkMode-violet12 md:text-4xl lg:text-5xl'>
                  Strategies
                </h1>
                <p className='mt-6 max-w-3xl text-xl text-light-violet1 opacity-80 dark:text-darkMode-gray dark:opacity-80'>
                  Join your favorite content creator in a strategy for limited-time drops,
                  rewards, achievements, and many more benefits.
                </p>
              </div>
            </div>
            <section className='relative z-0 mx-auto -mt-32 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
                {strategies.map((strategies) => (
                  <div
                    key={strategies.name}
                    className='flex flex-col rounded-2xl bg-light-violet2 shadow-xl dark:bg-darkMode-violet2'>
                    <div className='relative flex-1 px-6 pt-16 pb-8 md:px-8'>
                      <div className='absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-light-violet7 p-3 shadow-lg dark:bg-darkMode-violet7'>
                        <strategies.icon
                          className='h-10 w-10 text-light-violet12 dark:text-darkMode-violet12'
                          aria-hidden='true'
                        />
                      </div>
                      <h3 className='text-xl font-medium text-light-violet11 dark:text-darkMode-violet11'>
                        {strategies.name}
                      </h3>
                      <p className='text-gray-500 mt-4 text-base'>
                        {strategies.description}
                      </p>
                      <p className='mt-2 text-right text-sm text-light-violet8 dark:text-darkMode-violet11'>
                        {strategies.comingSoon ? 'Coming soon...' : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
