import Image from 'next/image'
import toast from 'react-hot-toast'

export function AuthWeb3({ login }) {
  const notSupported = () => toast.error('WalletConnect not currently supported.')
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='text-2xl font-medium leading-6 '>Authenticate with wallet</h2>
      <button
        className='mt-5 flex w-full transform items-center rounded-lg bg-[#ec9461] py-2 pl-4 transition duration-200 hover:scale-105 focus:outline-none'
        onClick={login}>
        <Image width={25} height={25} src='/metamask-fox.svg' alt='metamask' />
        <p className='pl-2 text-sm font-medium text-white'>MetaMask</p>
      </button>
      <button
        className='mt-3 flex w-full transform items-center rounded-lg bg-[#2e4093] py-2 pl-4 transition duration-200 hover:scale-105 focus:outline-none'
        onClick={notSupported}>
        <Image width={20} height={15} src='/wcLogo.png' alt='metamask' />
        <p className='pl-2 text-sm font-medium text-white'>WalletConnect</p>
      </button>
    </div>
  )
}
