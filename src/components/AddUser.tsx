import { Props } from '../../data'
import { UserCircleIcon, UserPlusIcon } from '@heroicons/react/24/solid'

import React, { useState } from 'react'

export default function AddPeople({ networkData, setNetworkData }: Props) {
  const [name, setName] = useState('')

  const handleAddUser = () => {
    if (!name) {
      console.error('Please enter a valid name')
      return
    }
    if (networkData.find((user) => user.name === name)) {
      console.error('User already exists')
      return
    }
    const newUser = {
      id: (networkData.length + 1).toString(),
      name: name,
      connections: [],
    }
    setNetworkData([...networkData, newUser])
    localStorage.setItem('networkData', JSON.stringify([...networkData, newUser]))
    setName('')
  }

  return (
    <>
      <section className='flex items-end  gap-4'>
        <div>
          <label htmlFor='user' className='block text-sm font-medium text-gray-700'>
            Add user
          </label>
          <div className=' relative rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <UserCircleIcon className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='text'
              name='user'
              id='user'
              placeholder='rushab'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md form-input'
            />
          </div>
        </div>
      </section>
      <button
        onClick={handleAddUser}
        type='submit'
        className='min-h-min inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 justify-self-start'
      >
        Add user
        <UserPlusIcon className='ml-3 -mr-1 h-5 w-5' />
      </button>
    </>
  )
}
