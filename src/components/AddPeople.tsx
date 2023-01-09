import { UserCircleIcon, UserPlusIcon } from '@heroicons/react/24/solid'

import React from 'react'

type props = { handleAddPeople: (personName: string) => void }

export default function AddPeople({ handleAddPeople }: props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & {
      person: HTMLInputElement
    }
    handleAddPeople(formElements.person.value)
  }
  return (
    <form className='flex' onSubmit={handleSubmit}>
      <>
        {/* <label htmlFor='person' className='block text-sm font-medium text-gray-700'>
          Add Person
        </label> */}
        <div className='mt-1 relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <UserCircleIcon className='h-5 w-5 text-gray-400' />
          </div>
          <input
            type='text'
            name='person'
            id='person'
            placeholder='rushab'
            className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md form-input'
          />
        </div>
      </>
      <button
        type='submit'
        className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Add Person
        <UserPlusIcon className='ml-3 -mr-1 h-5 w-5' />
      </button>
    </form>
  )
}
