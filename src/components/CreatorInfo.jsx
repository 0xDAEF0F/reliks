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
      <h2 className='text-2xl leading-6 font-medium text-gray-900'>
        Fill your Information
      </h2>
      <div className='w-48 mt-5 mx-auto flex flex-col gap-4'>
        {/* username */}
        <div>
          <div className='flex justify-between'>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-gray-700'>
              Username
            </label>
            <span className='text-sm text-gray-500' id='email-optional'>
              Optional
            </span>
          </div>
          <div>
            <input
              {...register('username')}
              type='text'
              name='username'
              id='username'
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='chad4269'
            />
            <div className='h-4 pt-1'>
              {errors.username?.type === 'isAvailable' && (
                <div className='flex items-center'>
                  <FiAlertTriangle color='red' />
                  <p className='text-red-400 text-xs pl-1'>Username is taken</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* email */}
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <div>
            <input
              {...register('email', { required: false })}
              type='email'
              name='email'
              id='email'
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='you@example.com'
              aria-describedby='email-optional'
            />
            <div className='h-4 pt-1'>
              {errors.email?.type === 'required' && (
                <div className='flex items-center'>
                  <FiAlertTriangle color='red' />
                  <p className='text-red-400 text-xs pl-1'>Email is required</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <input
            className='cursor-pointer text-white dark:text-black shadow-sm bg-indigo-600 focus:ring-indigo-600 border-gray-300 focus:border-indigo-500 w-full border rounded-md py-1 mt-4'
            type='submit'
          />
        </div>
      </div>
    </form>
  )
}
