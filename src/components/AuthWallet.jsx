import Image from 'next/image'

export default function AuthWallet({ login }) {
  return (
    <div className='flex justify-center flex-col'>
      <h2 className='text-2xl leading-6 font-medium text-gray-900'>
        Authenticate with wallet
      </h2>
      <button
        className='flex items-center mt-5 bg-orange-500 py-2 pl-4 rounded-lg transform transition duration-200 hover:scale-105 w-full focus:outline-none'
        onClick={login}>
        <Image width={25} height={25} src='/metamask-fox.svg' alt='metamask' />
        <p className='text-white text-sm font-medium pl-2'>MetaMask</p>
      </button>
      <button
        className='flex items-center mt-3 bg-blue-700 py-2 pl-4 rounded-lg transform transition duration-200 hover:scale-105 w-full focus:outline-none'
        onClick={login}>
        <Image width={20} height={15} src='/wcLogo.png' alt='metamask' />
        <p className='text-white text-sm font-medium pl-2'>WalletConnect</p>
      </button>
    </div>
  )
}
