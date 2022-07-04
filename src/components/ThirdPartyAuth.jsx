export default function AuthWallet() {
  return (
    <div className='flex justify-center flex-col'>
      <h2 className='text-2xl leading-6 font-medium text-gray-900'>
        Connect your account
      </h2>
      <div className='mt-5'>
        <button>
          <img
            className='w-20 transform transition duration-500 hover:scale-105 focus:outline-none'
            src='/ytLogo.png'
            alt='Youtube Logo'
          />
        </button>
      </div>
    </div>
  )
}
