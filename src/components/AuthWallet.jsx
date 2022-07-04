export default function AuthWallet({ login }) {
  return (
    <div className='flex justify-center flex-col'>
      <h2 className='text-2xl leading-6 font-medium text-gray-900'>
        Authenticate with wallet
      </h2>
      <button
        className='flex mt-5 bg-gradient-to-r from-orange-500 to-orange-300 py-4 px-4 rounded-lg transform transition duration-500 hover:scale-105 w-full focus:outline-none'
        onClick={login}>
        <img className='w-8' src='/metamask-fox.svg' alt='metamask' />
        <p className='text-xl text-white font-semibold pl-2'>MetaMask</p>
      </button>
    </div>
  )
}
