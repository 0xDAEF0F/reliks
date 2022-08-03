import Image from 'next/image'
import toast from 'react-hot-toast'

export function AuthWeb3({ login }) {
  const notSupported = () => toast.error('WalletConnect not currently supported.')
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-center text-xl font-medium leading-6'>Login With Web3</h2>
      <button
        className='mt-5 flex w-3/4 transform items-center rounded-lg bg-[#F6851B] py-2 pl-4 transition duration-200 hover:scale-105 focus:outline-none'
        onClick={login}>
        <Image width={25} height={25} src='/metamask-fox.svg' alt='metamask' />
        <p className='pl-2 text-sm font-medium text-white'>MetaMask</p>
      </button>
      <button
        className='mt-3 flex w-3/4 transform items-center rounded-lg bg-[#2e4093] py-2 pl-4 transition duration-200 hover:scale-105 focus:outline-none'
        onClick={notSupported}>
        <Image width={20} height={15} src='/wcLogo.png' alt='metamask' />
        <p className='pl-2 text-sm font-medium text-white'>WalletConnect</p>
      </button>
    </div>
  )
}
