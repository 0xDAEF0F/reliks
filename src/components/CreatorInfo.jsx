export default function CreatorInfo() {
  return (
    <>
      <h2 className='text-2xl leading-6 font-medium text-gray-900'>
        Fill your Information
      </h2>
      <div className='w-48 mt-5 mx-auto flex flex-col gap-4'>
        {/* username */}
        <div>
          <label
            htmlFor='username'
            className='block text-sm font-medium text-gray-700'>
            Username
          </label>
          <div>
            <input
              type='text'
              name='username'
              id='username'
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='chad4269'
            />
          </div>
        </div>
        {/* email */}
        <div>
          <div className='flex justify-between'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <span className='text-sm text-gray-500' id='email-optional'>
              Optional
            </span>
          </div>
          <div>
            <input
              type='email'
              name='email'
              id='email'
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='you@example.com'
              aria-describedby='email-optional'
            />
          </div>
        </div>
        {/* password */}
        <div>
          <div className='flex justify-between'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <span className='text-sm text-gray-500' id='email-optional'>
              Optional
            </span>
          </div>
          <div>
            <input
              type='password'
              name='password'
              id='password'
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='*******'
              aria-describedby='password-optional'
            />
          </div>
          <div>
            <button className='text-white dark:text-black shadow-sm bg-indigo-500 focus:ring-indigo-500 border-gray-300 focus:border-indigo-500 w-full border rounded-md py-1 mt-4'>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
