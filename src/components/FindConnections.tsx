import { Dialog, Transition } from '@headlessui/react'
import { UsersIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import React, { Fragment } from 'react'

export default function FindConnections({
  handleFindDegreeOfSeparation,
  setOpen,
}: {
  handleFindDegreeOfSeparation: () => void
  setOpen: (open: boolean) => void
}) {
  return (
    <button
      onClick={() => {
        handleFindDegreeOfSeparation()
        setOpen(true)
      }}
      type='button'
      className=' ml-auto inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      Find Connections <MagnifyingGlassIcon className='ml-3 -mr-1 h-5 w-5' />
    </button>
  )
}

export function FindConnectionsModal({
  setOpen,
  open,
  dfsResult,
  bfsResult,
}: {
  setOpen: (open: boolean) => void
  open: boolean
  dfsResult: { degree: number; path: string[] }
  bfsResult: { degree: number; path: string[] }
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen}>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6'>
              <div>
                <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100'>
                  <UsersIcon className='h-6 w-6 text-indigo-600' />
                </div>
                <div className='mt-3 text-center sm:mt-5'>
                  <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                    The shortest degree of separation is {bfsResult?.degree} and the longest is {''}
                    {dfsResult?.degree}
                  </Dialog.Title>
                  <div className='px-4 py-4 sm:px-6 flex flex-col gap-4'>
                    Longest Path is -{' '}
                    <div>
                      {dfsResult?.path.map((path, indx) => (
                        <div className='inline-block last:[&>*]:last:hidden' key={indx}>
                          <span className='inline-flex border border-indigo-500  items-center px-2.5 py-0.5 rounded-md  bg-indigo-200 text-slate-800'>
                            {path}
                          </span>
                          {indx < path.length - 1 ? (
                            <ArrowRightIcon className=' h-5 w-5 text-slate-400 inline-block  ' />
                          ) : null}
                        </div>
                      ))}
                    </div>
                    Shortest Path is -{' '}
                    <div>
                      {bfsResult?.path.map((path, indx) => (
                        <div className='inline-block last:[&>*]:last:hidden' key={indx}>
                          <span className='inline-flex border border-indigo-500  items-center px-2.5 py-0.5 rounded-md  bg-indigo-200 text-slate-800'>
                            {path}
                          </span>
                          <ArrowRightIcon className=' h-5 w-5 text-slate-400 inline-block  ' />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 sm:mt-6'>
                <button
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
                  onClick={() => setOpen(false)}
                >
                  Go back to dashboard
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
