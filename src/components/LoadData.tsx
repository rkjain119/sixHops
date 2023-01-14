import { CloudArrowDownIcon } from '@heroicons/react/24/solid'

import React from 'react'

export default function LoadData({ handleLoadData }: { handleLoadData: () => void }) {
  return (
    <button
      onClick={handleLoadData}
      type='button'
      className='ml-auto inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      Load Data <CloudArrowDownIcon className='ml-3 -mr-1 h-5 w-5' />
    </button>
  )
}
