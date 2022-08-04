import Image from 'next/image'
import toast from 'react-hot-toast'
import { ImYoutube2 } from 'react-icons/im'

export default function SocialAppAuth({ connectYoutube }) {
  const notSupportedToast = () =>
    toast.error('Twitch not yet supported. Please try with Youtube.')
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-xl font-medium leading-6 '>Connect your account</h2>
      <button
        onClick={connectYoutube}
        className='mt-5 flex w-3/4 transform items-center justify-center rounded-lg bg-[#FF0000] py-2 shadow-md transition duration-200 hover:scale-105 focus:outline-none'>
        <ImYoutube2 className='h-6 w-6 text-white' />
        <p className='pl-2 text-xs font-semibold text-white'>Continue with Youtube</p>
      </button>
      <button
        onClick={notSupportedToast}
        className='mt-5 flex w-3/4 transform items-center justify-center rounded-lg bg-[#9146FF] py-2 shadow-md transition duration-200 hover:scale-105  focus:outline-none '>
        <Image width={20} height={20} src='/twitchLogoWhite.png' alt='twitch' />
        <p className='my-1 pl-2 text-xs font-semibold text-white'>Continue with Twitch</p>
      </button>
    </div>
  )
}
