import React from 'react'

function EditProfile() {
  return (
    <section className='pt-28'>
      <div className='mx-auto container max-w-4xl md:w-3/4 px-5'>
        <p className='text-4xl font-bold mb-10 ml-5'>Edit your profile</p>

        <div className='bg-white dark:bg-mauve  space-y-6 rounded-xl shadow-md'>
          <div className='flex content-center pr-10 pt-10 justify-end'>
            <p className='text-red-700'>*</p>
            <p className=' text-sm font-normal pl-1'>Required</p>
          </div>
          <div className='md:inline-flex  space-y-4 md:space-y-0  w-full p-4 items-center'>
            <h2 className='md:w-1/3 max-w-sm mx-auto text-2xl font-medium text-light-gray dark:text-darkMode-gray'>
              Enter your information
            </h2>
            <div className='md:w-2/3 mx-auto max-w-sm space-y-5'>
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
                    className='bg-white dark:bg-mauve shadow-sm focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 w-full sm:text-sm border-light-bordergray dark:border-darkMode-bordergray rounded-md'
                    placeholder='chad4269'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium '>Bio</label>
                <textarea
                  typeof='text'
                  placeholder='Text your story!'
                  className='bg-white dark:bg-mauve shadow-sm focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 w-full sm:text-sm border-light-bordergray dark:border-darkMode-bordergray rounded-md'
                />
              </div>
            </div>
          </div>
          <div className='md:inline-flex space-y-4 md:space-y-0 w-full p-4 items-center'>
            <h2 className='md:w-1/3 max-w-sm mx-auto text-2xl font-medium'>
              Receive email notifications
            </h2>
            <div className='md:w-2/3 max-w-sm mx-auto'>
              <div>
                <label htmlFor='email' className='block text-sm font-medium '>
                  Email
                </label>
                <div>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-white dark:bg-mauve shadow-sm focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 w-full sm:text-sm border-light-bordergray dark:border-darkMode-bordergray rounded-md'
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
          <div className='md:inline-flex space-y-4 md:space-y-0 w-full p-4 items-center'>
            <h2 className='md:w-1/3 max-w-sm mx-auto text-2xl font-medium'>
              Add your social media links
            </h2>
            <div className='flex flex-col gap-1 md:w-2/3 max-w-sm mx-auto'>
              <label className='block text-sm font-medium '>Links</label>
              <div className='w-full inline-flex rounded-md'>
                <input
                  type='text'
                  name=''
                  id=''
                  className='bg-white dark:bg-mauve shadow-sm focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 w-full sm:text-sm border-light-bordergray dark:border-darkMode-bordergray rounded-md'
                  placeholder='Youtube'
                />
              </div>
              <div className='w-full inline-flex rounded-md'>
                <input
                  type='text'
                  name=''
                  id=''
                  className='bg-white dark:bg-mauve shadow-sm focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 w-full sm:text-sm border-light-bordergray dark:border-darkMode-bordergray rounded-md'
                  placeholder='Twitch'
                />
              </div>
              <div className='w-full inline-flex rounded-md'>
                <input
                  type='text'
                  name=''
                  id=''
                  className='bg-white dark:bg-mauve shadow-sm focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 w-full sm:text-sm border-light-bordergray dark:border-darkMode-bordergray rounded-md'
                  placeholder='Tik tok'
                />
              </div>
              <div className='md:inline-flex w-full space-y-4 md:space-y-0 pt-10  justify-end'>
                <div className=''>
                  <button className='text-white bg-light-violet9 dark:bg-darkMode-violet9 w-full mx-auto max-w-sm rounded-md text-center bg-blue-00 py-2 px-4 inline-flex items-center focus:outline-none md:float-right justify-center'>
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
