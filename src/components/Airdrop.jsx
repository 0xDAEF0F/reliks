import { useForm } from 'react-hook-form'
import { IoCloseCircleSharp } from 'react-icons/io5'

function Airdrop() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  return (
    <div className='relative'>
      <div className='absolute inset-0' aria-hidden='true'>
        <div className='inset-y-0 right-0 w-1/2 rounded-br-md bg-light-violet9 bg-gradient-to-r from-light-violet8 to-light-violet9 dark:from-darkMode-violet8 dark:to-darkMode-violet9 lg:absolute' />
      </div>
      <div className='relative mx-auto  lg:grid lg:grid-cols-2 lg:pl-3'>
        <div className='mx-auto max-w-xl lg:mx-0'>
          <div className='mx-4 md:ml-0'>
            <h2 className='text-base font-medium uppercase tracking-wide text-light-violet11 dark:text-darkMode-violet11'>
              Airdrop
            </h2>
            <p className='text-gray-900 mb-4 text-lg font-semibold sm:text-3xl'>
              Surprise your lair!
            </p>

            <div className='mx-auto mb-4 grid h-80 place-content-center space-y-1 rounded-lg border-2 border-dashed border-darkMode-violet11 p-4 text-center'>
              <svg
                className='text-gray-400 mx-auto h-12 w-12'
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
              <div className='flex items-center text-sm '>
                <label
                  htmlFor='file-upload'
                  className='focus-within:ring-indigo-500 relative cursor-pointer rounded-md bg-mauve p-1 font-medium text-light-violet1 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 hover:opacity-75 dark:bg-white dark:text-mauve'>
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
              <p className='text-xs text-light-violet10 dark:text-darkMode-violet10'>
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div className='mx-auto mt-8 flex max-w-xl sm:items-start lg:mx-0 lg:bg-none lg:pl-8'>
          <form
            className='mx-auto mb-5 rounded-2xl p-4 sm:mt-0 md:mb-0'
            onSubmit={handleSubmit((a) => console.log(a))}>
            <h2 className='text-2xl font-semibold leading-6 text-light-violet12 dark:text-darkMode-violet12'>
              Lorem ipsum, dolor sit.
            </h2>
            <div className='mx-auto mt-2 flex flex-col gap-4'>
              {/* title */}
              <div>
                <div className='mb-2 text-sm text-light-violet12 dark:text-darkMode-gray dark:opacity-80'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
                  tempor.
                </div>
                <label
                  htmlFor='title'
                  className='mb-1 block text-sm font-bold text-light-violet12 dark:text-darkMode-violet12'>
                  Title*
                </label>

                <input
                  {...register('title', {
                    required: true,
                  })}
                  type='text'
                  name='title'
                  id='title'
                  className={`${
                    errors.title
                      ? ' border border-error focus:border-error focus:ring-error dark:border-error'
                      : 'border-light-bordergray  focus:border-light-violet7 focus:ring-light-violet7 '
                  } w-full rounded-md bg-white  shadow-sm disabled:cursor-not-allowed  disabled:opacity-50 dark:border-mauve dark:bg-darkMode-violet2 sm:text-sm`}
                  placeholder='15'
                />
                {/* error title */}
                <div className='h-4'>
                  {errors.title && (
                    <div className='flex items-center'>
                      <IoCloseCircleSharp className='birder text-[#942f1e] dark:text-[#ff1a60] ' />
                      <p className='text-sm font-semibold tracking-wide text-[#942e2e] opacity-100  dark:text-error dark:brightness-125'>
                        Required
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* description */}
              <div>
                <label
                  htmlFor='title'
                  className='mb-1 block text-sm font-bold text-light-violet12 dark:text-darkMode-violet12'>
                  Description*
                </label>

                <input
                  {...register('title', {
                    required: true,
                  })}
                  type='text'
                  name='title'
                  id='title'
                  className={`${
                    errors.title
                      ? ' border border-error focus:border-error focus:ring-error dark:border-error'
                      : 'border-light-bordergray  focus:border-light-violet7 focus:ring-light-violet7 '
                  } w-full rounded-md bg-white  shadow-sm disabled:cursor-not-allowed  disabled:opacity-50 dark:border-mauve dark:bg-darkMode-violet2 sm:text-sm`}
                  placeholder='15'
                />
                {/* error title */}
                <div className='h-4'>
                  {errors.title && (
                    <div className='flex items-center'>
                      <IoCloseCircleSharp className='birder text-[#942f1e] dark:text-[#ff1a60] ' />
                      <p className='text-sm font-semibold tracking-wide text-[#942e2e] opacity-100  dark:text-error dark:brightness-125'>
                        Required
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className='mt-5 md:mt-0'>
                <input
                  className='flex w-full  cursor-pointer items-center justify-center rounded-md bg-mauve py-2 px-8 text-lg font-medium leading-6 text-light-violet1 hover:opacity-80 dark:bg-white dark:text-darkMode-violet1 md:py-4 md:px-10'
                  type='submit'
                  value='Airdrop'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Airdrop
