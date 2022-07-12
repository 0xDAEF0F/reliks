import { useForm } from 'react-hook-form'
import { FiAlertTriangle } from 'react-icons/fi'
import { schema } from '../util/schema'
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
      <h2 className='text-2xl leading-6 font-medium '>Fill your Information</h2>
      <div className='w-48 mt-5 mx-auto flex flex-col gap-1'>
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
              className='bg-white dark:bg-mauve shadow-sm focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 w-full sm:text-sm border-light-bordergray dark:border-darkMode-bordergray rounded-md'
              placeholder='chad4269'
            />
            <div className='h-4 pt-1'>
              {errors.username?.type === 'isAvailable' && (
                <div className='flex items-center'>
                  <FiAlertTriangle color='red' />
                  <p className='text-error text-xs pl-1'>Username is taken</p>
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
              className='bg-white dark:bg-mauve shadow-sm focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 w-full sm:text-sm border-light-bordergray dark:border-darkMode-bordergray rounded-md'
              placeholder='you@example.com'
              aria-describedby='email-optional'
            />
            <div className='h-4 pt-1'>
              {errors.email?.type === 'required' && (
                <div className='flex items-center'>
                  <FiAlertTriangle color='red' />
                  <p className='text-error text-xs pl-1'>Email is required</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <input
            className='text-white dark:text-mauve cursor-pointer shadow-sm bg-light-violet9 hover:bg-light-violet10 dark:bg-darkMode-violet9 dark:hover:bg-darkMode-violet10 focus:ring-light-violet7 focus:border-light-violet7 dark:focus:ring-darkMode-violet7 dark:focus:border-darkMode-violet7 w-full border rounded-md py-1 mt-2'
            type='submit'
          />
        </div>
      </div>
    </form>
  )
}
