import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { createWhaleFactory } from '../util/deployWhale'
import toast from 'react-hot-toast'

export default function ModalWhaleContract() {
  const [open, setOpen] = useState(false)
  const { handleSubmit, register } = useForm()

  const deployWhale = async ({ whaleCount, price }) => {
    try {
      const WhaleFactory = await createWhaleFactory()
      const contract = await WhaleFactory.deploy(
        process.env.APP_ADDRESS,
        whaleCount,
        price
      )
      toast.success('contract address: ', contract.address)
      await contract.deployed()
      toast.success('contract deployed succesfully.')
    } catch (err) {
      toast.error('could not deploy contract')
    }
  }

  const onSubmit = (data) => deployWhale(data)

  return (
    <>
      {/* Button to open modal*/}
      <button
        className='whitespace-nowrap rounded bg-light-violet9 px-2 py-1 text-white hover:bg-light-violet10 dark:bg-darkMode-violet9 dark:hover:bg-light-violet10 '
        onClick={() => setOpen(true)}>
        Whale Strategy
      </button>

      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-50 overflow-y-auto' onClose={setOpen}>
          <div className='flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-mauve bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:h-screen sm:align-middle'
              aria-hidden='true'>
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <div className='inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-mauve sm:my-8 sm:max-w-lg sm:p-10 sm:px-10 sm:align-middle'>
                <div className='absolute top-0 right-0 hidden pt-4 pr-6 sm:block'>
                  <button
                    type='button'
                    className='rounded-md text-light-gray focus:outline-none focus:ring-2 focus:ring-light-violet7 dark:text-darkMode-gray dark:focus:ring-darkMode-violet7'
                    onClick={() => setOpen(false)}>
                    <AiOutlineClose size={18} />
                  </button>
                </div>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-left sm:mt-0'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h2 className='text-2xl font-medium leading-6'>Whale Strategy</h2>
                      <div className='mx-auto mt-5 flex w-48 flex-col gap-4'>
                        {/* number of whales */}
                        <div>
                          <div className=''>
                            <label
                              htmlFor='whales'
                              className='block text-sm font-medium text-light-gray dark:text-darkMode-gray'>
                              Noº whales
                            </label>
                          </div>
                          <div>
                            <input
                              {...register('whales', { required: true })}
                              type='text'
                              name='whales'
                              id='whales'
                              className='w-full rounded-md border-light-bordergray bg-white shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                              placeholder='20'
                            />
                          </div>
                        </div>
                        {/* price */}
                        <div>
                          <label
                            htmlFor='price'
                            className='block text-sm font-medium text-light-gray dark:text-darkMode-gray'>
                            Price
                          </label>
                          <div className='relative mt-1 rounded-md shadow-sm'>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                              <span className='flex items-center sm:text-sm'>
                                <Image
                                  width={9}
                                  height={14}
                                  src='/ethereum.svg'
                                  alt='eth'
                                />
                              </span>
                            </div>
                            <input
                              {...register('price', { required: true })}
                              type='text'
                              name='price'
                              id='price'
                              className='w-full rounded-md border-light-bordergray bg-white pl-7 pr-12 shadow-sm focus:border-light-violet7 focus:ring-light-violet7 dark:border-darkMode-bordergray dark:bg-mauve dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7 sm:text-sm'
                              placeholder='0.0'
                            />
                            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                              <span className=' sm:text-sm' id='price-currency'>
                                ETH
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <input
                            className='mt-4 w-full cursor-pointer rounded-md border bg-light-violet9 py-1 text-white shadow-sm hover:bg-light-violet10 focus:border-light-violet7 focus:ring-light-violet7 dark:bg-darkMode-violet9 dark:text-mauve dark:hover:bg-darkMode-violet10 dark:focus:border-darkMode-violet7 dark:focus:ring-darkMode-violet7'
                            type='submit'
                            value='Deploy Contract'
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
