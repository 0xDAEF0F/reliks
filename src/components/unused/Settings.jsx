import React from 'react'

function EditProfile() {
  return (
    <section className='pt-28'>
      <div className='container mx-auto max-w-4xl px-5 md:w-3/4'>
        <p className='mb-10 ml-5 text-4xl font-bold'>Edit your profile</p>

        <div className='space-y-6 rounded-xl  bg-white shadow-md dark:bg-mauve'>
          <div className='flex content-center justify-end pr-10 pt-10'>
            <p className='text-red-700'>*</p>
            <p className=' pl-1 text-sm font-normal'>Required</p>
          </div>
          <div className='w-full  items-center space-y-4  p-4 md:inline-flex md:space-y-0'>
            <h2 className='mx-auto max-w-sm text-2xl font-medium text-light-gray dark:text-darkMode-gray md:w-1/3'>
              Enter your information
            </h2>
            <div className='mx-auto max-w-sm space-y-5 md:w-2/3'>
              <div>
                <div className='flex justify-between'>
                  <div className='flex justify-start'>
                    <label className='block text-sm font-medium text-light-gray dark:text-darkMode-gray'>
                      Username
                    </label>
                    <p className='text-red-700'>*</p>
                  </div>
                </div>
                <div>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                    placeholder='chad4269'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium '>Bio</label>
                <textarea
                  typeof='text'
                  placeholder='Text your story!'
                  className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                />
              </div>
            </div>
          </div>
          <div className='w-full items-center space-y-4 p-4 md:inline-flex md:space-y-0'>
            <h2 className='mx-auto max-w-sm text-2xl font-medium md:w-1/3'>
              Receive email notifications
            </h2>
            <div className='mx-auto max-w-sm md:w-2/3'>
              <div>
                <label htmlFor='email' className='block text-sm font-medium '>
                  Email
                </label>
                <div>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                    placeholder='you@example.com'
                    aria-describedby='email-optional'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className='md:inline-flex space-y-4 md:space-y-0 w-full p-4 items-center'>
            <h2 className='md:w-1/3 max-w-sm mx-auto text-2xl font-medium'>
              Change your pictures
            </h2>
            <div className='flex flex-col gap-4 md:w-2/3 max-w-sm mx-auto'>
              <div>
                <label className='block text-sm font-medium '>
                  Profile picture
                </label>
                <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                  <div className='space-y-1 text-center'>
                    <svg
                      className='mx-auto h-12 w-12 '
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'>
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm '>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                        <span>Upload a file</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs '>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium '>
                  Banner
                </label>
                <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                  <div className='space-y-1 text-center'>
                    <svg
                      className='mx-auto h-12 w-12 '
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'>
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm '>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                        <span>Upload a file</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs '>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className='w-full items-center space-y-4 p-4 md:inline-flex md:space-y-0'>
            <h2 className='mx-auto max-w-sm text-2xl font-medium md:w-1/3'>
              Add your social media links
            </h2>
            <div className='mx-auto flex max-w-sm flex-col gap-1 md:w-2/3'>
              <label className='block text-sm font-medium '>Links</label>
              <div className='inline-flex w-full rounded-md'>
                <input
                  type='text'
                  name=''
                  id=''
                  className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                  placeholder='Youtube'
                />
              </div>
              <div className='inline-flex w-full rounded-md'>
                <input
                  type='text'
                  name=''
                  id=''
                  className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                  placeholder='Twitch'
                />
              </div>
              <div className='inline-flex w-full rounded-md'>
                <input
                  type='text'
                  name=''
                  id=''
                  className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                  placeholder='Tik tok'
                />
              </div>
              <div className='w-full justify-end space-y-4 pt-10 md:inline-flex  md:space-y-0'>
                <div className=''>
                  <button className='bg-blue-00 mx-auto inline-flex w-full max-w-sm items-center justify-center rounded-md bg-light-violet9 py-2 px-4 text-center text-white focus:outline-none dark:bg-darkMode-violet9 md:float-right'>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditProfile
