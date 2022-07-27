import Image from 'next/image'
import toast from 'react-hot-toast'
import { ImYoutube2 } from 'react-icons/im'

export default function SocialAppAuth({ connectYoutube }) {
  const notSupportedToast = () =>
    toast.error('Twitch not yet supported. Please try with Youtube.')
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='text-2xl font-medium leading-6 '>Connect your account</h2>
      <div>
        <button
          onClick={connectYoutube}
          className='mt-5 flex w-full items-center justify-center rounded-lg bg-[#FF0000] py-2 shadow-md hover:opacity-70 focus:border-light-violet7 focus:outline-none focus:ring-2 focus:ring-light-violet7 focus:ring-offset-2 dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7'>
          <ImYoutube2 className='h-6 w-6 text-darkMode-violet1 dark:text-white' />
          <p className='pl-2 text-sm font-semibold'>Continue with Youtube</p>
        </button>
        <button
          onClick={notSupportedToast}
          className='mt-5 flex w-full items-center justify-center rounded-lg bg-[#5d2e93] py-2 shadow-md hover:brightness-90 focus:border-light-violet7 focus:outline-none focus:ring-2 focus:ring-light-violet7 focus:ring-offset-2 dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7'>
          <Image width={16} height={16} src='/twitchLogoWhite.png' alt='twitch' />
          <p className='pl-2 text-sm font-semibold text-white'>Continue with Twitch</p>
        </button>
      </div>
    </div>
  )
}
