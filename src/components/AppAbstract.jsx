import {GiSpermWhale, GiOpenTreasureChest} from 'react-icons/gi'
import {TbBadges} from 'react-icons/tb'


const strategies = [
  {
    name: 'Whale Strategy',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    comingSoon: false,
    icon: GiSpermWhale,
  },
  {
    name: 'Badges',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    comingSoon: true,
    icon: TbBadges,
  },
  {
    name: 'Subscription Chests',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    comingSoon: true,
    icon: GiOpenTreasureChest,
  },
]
export function AppAbstract() {
  return (
    <main>
      <div className='pt-24 md:pt-20 lg:overflow-hidden'>
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
                <p className='mt-3 text-base text-light-gray dark:text-darkMode-gray sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  Meldrop is a platform for content creators to connect with their fan
                  base, get supported, and in return, grant rewards in the form of NFTs
                  and token drops.
                </p>
              </div>
            </div>
            <div className='mx-auto mt-12 lg:relative lg:m-0'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                {/* To fix lightMode asset */}
                <img
                  className='h-80 w-full lg:w-max lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:max-w-none'
                  src='/asset.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='mt-28'>
            <div className="relative pb-32">
              <div className="absolute inset-0">
                <div
                  className="w-full h-full object-cover bg-gradient-to-r dark:from-darkMode-violet8 dark:to-darkMode-violet9 from-light-violet8 to-light-violet9  rounded-lg"
                />
                <div className="absolute inset-0mix-blend-multiply" aria-hidden="true" />
              </div>
              <div className="relative max-w-7xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-light-violet12 dark:text-white md:text-4xl lg:text-5xl">Strategies</h1>
                <p className="mt-6 max-w-3xl text-xl text-light-gray dark:text-darkMode-gray opacity-80">
                The application comprises strategies that every creator must create beforehand,
                each providing different rewards for its user base.
                </p>
              </div>
            </div>
            <section
              className="-mt-32 max-w-7xl mx-auto relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                {strategies.map((strategies) => (
                  <div key={strategies.name} className="flex flex-col bg-light-violet2 dark:bg-mauve rounded-2xl shadow-xl">
                    <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                      <div className="absolute top-0 p-5 inline-block bg-light-violet7 dark:bg-darkMode-violet7 rounded-xl shadow-lg transform -translate-y-1/2">
                        <strategies.icon className="h-6 w-6 text-light-violet12 dark:text-darkMode-violet12" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-medium text-light-violet11 dark:text-darkMode-violet11">{strategies.name}</h3>
                      <p className="mt-4 text-base text-gray-500">{strategies.description}</p>
                      <p className='text-sm mt-2 text-right text-light-violet8 dark:text-darkMode-violet8'>{strategies.comingSoon ? 'Coming soon...' : ''}</p>
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
