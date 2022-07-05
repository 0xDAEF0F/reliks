import React from 'react'

export default function creatorInfo() {
  return (
    <div className='w-48 ml-10 mt-10'>
      {/* username */}
      <div>
        <label
          htmlFor='username'
          className='block text-sm font-medium text-gray-700'>
          Username
        </label>
        <div className='mt-1'>
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
        <div className='mt-1'>
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
        <div className='mt-1'>
          <input
            type='password'
            name='password'
            id='password'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            placeholder='*******'
            aria-describedby='password-optional'
          />
        </div>
      </div>
    </div>
  )
}
