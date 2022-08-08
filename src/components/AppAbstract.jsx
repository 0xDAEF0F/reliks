import { useEffect, useState } from 'react'
import { GiCheckedShield, GiOpenTreasureChest, GiSpermWhale } from 'react-icons/gi'
import { TbArrowNarrowDown } from 'react-icons/tb'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const strategies = [
  {
    name: 'Whales Lair',
    href: '#',
    description:
      "Immerse within your creators' lair (discord room) and enjoy whale-exclusive rewards.",
    comingSoon: false,
    icon: GiSpermWhale,
  },
  {
    name: 'Badges',
    href: '#',
    description:
      "Badges are a reward based system that symbolize achievements earned within your creators' ecosystem.",
    comingSoon: true,
    icon: GiCheckedShield,
  },
  {
    name: 'Chests',
    href: '#',
    description:
      'Subscription chests grant you gems that you can sell, trade, and exchange for prizes.',
    comingSoon: true,
    icon: GiOpenTreasureChest,
  },
]
export function AppAbstract() {
  const [top, setTop] = useState(true)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <main>
      <div className='mb-10 pt-24 lg:overflow-hidden'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left'>
              <div className='lg:my-24'>
                <h1 className='mt-4 text-4xl font-extrabold tracking-tight text-mauve dark:text-darkMode-violet12 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                  <span className='block'>Unite with</span>
                  <span className='block text-light-violet11 dark:text-darkMode-violet11'>
                    your favorite creator.
                  </span>
                </h1>
                <p className='mt-3 mb-2 text-base text-light-gray dark:text-darkMode-gray sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  Reliks is a platform for content creators to connect with their fan
                  base, get supported, and in return, grant rewards in the form of NFTs
                  and token drops.
                </p>
                <a
                  href='https://alkaline-ceres-b4f.notion.site/Light-Paper-8e94cdbc4d944705aed046465d4de9ea'
                  rel='noreferrer'
                  target='_blank'
                  className='text-xl text-light-violet10 hover:text-light-violet11 dark:text-darkMode-violet10 dark:hover:text-darkMode-violet11'>
                  Lite Paper&nbsp;&rarr;
                </a>
              </div>
            </div>
            <div className='relative mx-auto my-10 h-80 md:mx-44 lg:my-0 lg:h-5/6 lg:w-5/6'>
              <Image
                src={theme === 'dark' ? '/asset.svg' : '/assetlm.svg'}
                layout='fill'
                alt='app abstract image'
              />
            </div>
          </div>
          <div
            className={`${
              !top
                ? 'invisible'
                : 'flex animate-pulse flex-col items-center transition duration-1000 ease-in-out'
            }`}>
            <p className='mt-10 md:mt-0'>Scroll down to see more</p>
            <TbArrowNarrowDown />
          </div>
          <div className='mt-28'>
            <div className='relative pb-32'>
              <div className='absolute inset-0'>
                <div className='h-full w-full rounded-lg bg-light-violet9 object-cover dark:bg-gradient-to-r dark:from-darkMode-violet8  dark:to-darkMode-violet10' />
                <div className='inset-0mix-blend-multiply absolute' aria-hidden='true' />
              </div>
              <div className='relative mx-auto max-w-7xl py-12 px-4 sm:py-20 sm:px-6 lg:px-8'>
                <h2 className='text-3xl font-extrabold tracking-tight text-light-violet2 dark:text-darkMode-violet12 md:text-4xl lg:text-5xl'>
                  Highlights
                </h2>
                <p className='mt-6 max-w-3xl text-justify text-xl text-light-violet1 opacity-80 dark:text-darkMode-gray dark:opacity-80'>
                  Join your favorite content creators for limited-time drops, rewards,
                  achievements, and many more benefits.
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
                      <p className='text-gray-500 mt-4 text-justify text-base'>
                        {strategies.description}
                      </p>
                      <span className='mt-2 block animate-pulse text-right text-sm italic text-light-gray opacity-75 transition duration-1000 ease-in-out dark:text-darkMode-gray'>
                        {strategies.comingSoon ? 'Coming soon...' : ''}
                      </span>
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
