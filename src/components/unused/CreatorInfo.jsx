import { useForm } from 'react-hook-form'
import { FiAlertTriangle } from 'react-icons/fi'
import { schema } from '../../util/schema'
import { yupResolver } from '@hookform/resolvers/yup'

export default function CreatorInfo({ submit }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => submit(data.username, data.email)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-2xl font-medium leading-6 '>Fill your Information</h2>
      <div className='mx-auto mt-5 flex w-48 flex-col gap-1'>
        {/* username */}
        <div>
          <label htmlFor='username' className='block text-sm font-medium '>
            Username
          </label>

          <div>
            <input
              {...register('username')}
              type='text'
              name='username'
              id='username'
              className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
              placeholder='chad4269'
            />
            <div className='h-4 pt-1'>
              {errors.username?.type === 'isAvailable' && (
                <div className='flex items-center'>
                  <FiAlertTriangle color='red' />
                  <p className='pl-1 text-xs text-error'>Username is taken</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* email */}
        <div>
          <label htmlFor='email' className='block text-sm font-medium '>
            Email
          </label>
          <div>
            <input
              {...register('email', { required: false })}
              type='email'
              name='email'
              id='email'
              className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
              placeholder='you@example.com'
              aria-describedby='email-optional'
            />
            <div className='h-4 pt-1'>
              {errors.email?.type === 'required' && (
                <div className='flex items-center'>
                  <FiAlertTriangle color='red' />
                  <p className='pl-1 text-xs text-error'>Email is required</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <input
            className='mt-2 w-full cursor-pointer rounded-md border bg-light-violet9 py-1 text-white shadow-sm hover:bg-light-violet10 focus:border-light-violet7 focus:ring-light-violet7 dark:bg-darkMode-violet9 dark:text-mauve dark:hover:bg-darkMode-violet10 dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7'
            type='submit'
          />
        </div>
      </div>
    </form>
  )
}
