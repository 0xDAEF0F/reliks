import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ReactLoading from 'react-loading'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import { TbArrowUpRight } from 'react-icons/tb'
import { BiErrorCircle, BiLinkAlt } from 'react-icons/bi'
import { chunk, flatMap } from 'lodash'

export function CreateLairLoadingModal({ currentTxn, open, setOpen }) {
  const { loading, lairAddress, error, hash } = currentTxn

  const formattedHash = flatMap(chunk(hash, hash?.length / 3), (chunk) =>
    chunk.concat('\n')
  ).join('')

  const StatusIcon = () => {
    if (error) return <BiErrorCircle color='red' />
    if (loading) return <ReactLoading type='balls' color='#6e56cf' />
    if (!loading) return <IoIosCheckmarkCircle size={30} color='#22bb33' />
  }

  return (
    <>
      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-30 overflow-y-auto' onClose={setOpen}>
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
              <div className=' inline-block w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-center align-bottom shadow-xl transition-all dark:bg-mauve sm:max-w-xs sm:align-middle'>
                <div className='absolute top-0 right-0 pt-4 pr-6'>
                  <button
                    type='button'
                    className='rounded-md text-light-gray focus:outline-none focus:ring-2 focus:ring-light-violet7 dark:text-darkMode-gray dark:focus:ring-darkMode-violet7'
                    onClick={() => setOpen(false)}>
                    <AiOutlineClose size={18} />
                  </button>
                </div>
                <div className='mt-3 flex flex-col items-center text-center sm:mt-0'>
                  <StatusIcon />
                  <h3 className='my-1 text-base font-bold text-black dark:text-light-violet4 '>
                    Txn Hash:
                  </h3>
                  <div
                    className={
                      formattedHash
                        ? 'group flex cursor-pointer underline opacity-50  hover:text-light-violet11 dark:hover:text-darkMode-violet11'
                        : 'hidden'
                    }>
                    <a
                      className='flex gap-1'
                      href={`https://etherscan.io/tx/${hash}`}
                      rel='noreferrer'
                      target='_blank'>
                      <BiLinkAlt size={18} />
                      <p className='w-min whitespace-pre-wrap text-xs font-normal'>
                        {formattedHash}
                      </p>
                      <TbArrowUpRight
                        className='invisible group-hover:visible'
                        size={17}
                      />
                    </a>
                  </div>
                  <br />
                  <h3 className='my-1 text-base font-bold text-black dark:text-light-violet4 '>
                    Lair Address:
                  </h3>
                  <div
                    className={
                      lairAddress
                        ? 'group flex cursor-pointer underline opacity-50  hover:text-light-violet11 dark:hover:text-darkMode-violet11'
                        : 'invisible'
                    }>
                    <a
                      className='flex gap-1'
                      href={`https://etherscan.io/address/${lairAddress}`}
                      rel='noreferrer'
                      target='_blank'>
                      <BiLinkAlt size={18} />
                      <p className='w-min whitespace-pre-wrap text-xs '>{lairAddress}</p>
                      <TbArrowUpRight
                        className='invisible group-hover:visible'
                        size={17}
                      />
                    </a>
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
