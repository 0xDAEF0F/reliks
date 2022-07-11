import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { createWhaleFactory } from '../util/deployWhale'

export default function ModalWhaleContract() {
  const [open, setOpen] = useState(false)
  const { handleSubmit, register } = useForm()

  const deployWhale = async () => {
    try {
      const WhaleFactory = await createWhaleFactory()
      const contract = await WhaleFactory.deploy(
        '0x9367d8c5Db2Eeb7dFA2504aB30323d3FAa4c015a',
        3,
        Moralis.web3Library.utils.parseEther('1')
      )
      console.log('contract address: ', contract.address)
      await contract.deployed()
      console.log('contract deployed succesfully.')
    } catch (err) {
      // handle error
      console.log(err)
    }
  }
  const onSubmit = (data) => console.log(data.whales, data.price)

  return (
    <>
      {/* Button to open modal*/}

      <button
        className='px-2 py-1 bg-gray-100 rounded-md'
        onClick={() => setOpen(true)}>
        Whale Strategy
      </button>

      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-y-auto'
          onClose={setOpen}>
          <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 dark:bg-gray-900 dark:bg-opacity-75 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
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
              <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-fullll sm:p-10 sm:px-10'>
                <div className='hidden sm:block absolute top-0 right-0 pt-4 pr-6'>
                  <button
                    type='button'
                    className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    onClick={() => setOpen(false)}>
                    <AiOutlineClose size={18} />
                  </button>
                </div>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h2 className='text-2xl leading-6 font-medium text-gray-900'>
                        Whale Strategy
                      </h2>
                      <div className='w-48 mt-5 mx-auto flex flex-col gap-4'>
                        {/* number of whales */}
                        <div>
                          <div className=''>
                            <label
                              htmlFor='whales'
                              className='block text-sm font-medium text-gray-700'>
                              Noº whales
                            </label>
                          </div>
                          <div>
                            <input
                              {...register('whales', { required: true })}
                              type='text'
                              name='whales'
                              id='whales'
                              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                              placeholder='20'
                            />
                          </div>
                        </div>
                        {/* price */}

                        <div>
                          <label
                            htmlFor='price'
                            className='block text-sm font-medium text-gray-700'>
                            Price
                          </label>
                          <div className='mt-1 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                              <span className='flex items-centertext-gray-500 sm:text-sm'>
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
                              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md pl-7 pr-12'
                              placeholder='0.0'
                            />
                            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                              <span
                                className='text-gray-500 sm:text-sm'
                                id='price-currency'>
                                ETH
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <input
                            className='cursor-pointer text-white dark:text-black shadow-sm bg-indigo-600 focus:ring-indigo-600 border-gray-300 focus:border-indigo-500 w-full border rounded-md py-1 mt-4'
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
