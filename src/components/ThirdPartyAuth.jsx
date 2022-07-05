import Image from 'next/image'

export default function AuthWallet() {
  return (
    <div className='flex justify-center flex-col'>
      <h2 className='text-2xl leading-6 font-medium text-gray-900'>
        Connect your account
      </h2>
      <div>
        <button className='flex justify-center items-center mt-5 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md py-2 rounded-lg hover:brightness-95  w-full'>
          <Image width={16} height={16} src='/googleLogo.png' alt='metamask' />
          <p className='text-sm text-black font-semibold pl-2'>
            Continue with Google
          </p>
        </button>

        <button className='flex justify-center items-center mt-5 bg-purple-800 shadow-md py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:brightness-95'>
          <Image
            width={16}
            height={16}
            src='/twitchLogoWhite.png'
            alt='metamask'
          />
          <p className='text-sm text-white font-semibold pl-2'>
            Continue with Twitch
          </p>
        </button>
      </div>
    </div>
  )
}
