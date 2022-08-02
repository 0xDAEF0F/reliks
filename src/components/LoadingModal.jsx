import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ReactLoading from 'react-loading'
import { chunk } from 'lodash'
import { flatMap } from 'lodash'
import { IoIosCheckmarkCircle } from 'react-icons/io'
export function LoadingModal({ open, setOpen, txn, loading }) {
  // Formats Hash into chunks with new lines
  const formattedTxn = flatMap(chunk(txn.hash, txn.hash?.length / 3), (chunk) =>
    chunk.concat('\n')
  ).join('')

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
              <div className='inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-mauve sm:my-8 sm:max-w-lg sm:p-6 sm:px-10 sm:align-middle'>
                <div className='sm:flex sm:items-center'>
                  <div className='mt-3 text-center sm:mt-0 '>
                    {loading ? (
                      <ReactLoading type='balls' className='mx-auto' color='#6e56cf' />
                    ) : (
                      <div className='flex justify-center '>
                        <IoIosCheckmarkCircle size={30} color='#22bb33' />
                      </div>
                    )}
                    <h3 className='m-2 text-base font-bold text-light-violet4 '>
                      Transaction Hash:
                    </h3>
                    {/* TODO: Change this to <a/> and redirect to block scanner */}
                    <p className='whitespace-pre-wrap text-sm underline decoration-light-violet8 decoration-solid underline-offset-2 hover:decoration-light-violet9'>
                      {formattedTxn}
                    </p>
                    <button
                      onClick={() => setOpen(false)}
                      className='mt-4 rounded-md border-2 border-light-violet8 py-1 px-3 text-sm font-semibold'>
                      Close
                    </button>
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
