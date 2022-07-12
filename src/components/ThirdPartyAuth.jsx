import Image from 'next/image'

export default function AuthWallet({ connectYoutube }) {
  return (
    <div className='flex justify-center flex-col'>
      <h2 className='text-2xl leading-6 font-medium '>Connect your account</h2>
      <div>
        <button
          onClick={connectYoutube}
          className='flex justify-center items-center mt-5 bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 shadow-md py-2 rounded-lg hover:opacity-70 w-full'>
          <Image width={16} height={16} src='/googleLogo.png' alt='metamask' />
          <p className='text-sm text-black font-semibold pl-2'>
            Continue with Youtube
          </p>
        </button>
        <button className='flex justify-center items-center mt-5 bg-[#5d2e93] shadow-md py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 hover:brightness-90'>
          <Image
            width={16}
            height={16}
            src='/twitchLogoWhite.png'
            alt='twitch'
          />
          <p className='text-sm text-white font-semibold pl-2'>
            Continue with Twitch
          </p>
        </button>
      </div>
    </div>
  )
}
