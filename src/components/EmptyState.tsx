import { CloudArrowDownIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export default function Empty({ handleLoadData }: { handleLoadData: () => void }) {
  return (
    <div className='text-center'>
      <UserGroupIcon className='mx-auto h-12 w-12 text-gray-400' />
      <h3 className='mt-2 text-sm font-medium text-gray-900'>No Data</h3>
      <p className='mt-1 text-sm text-gray-500'>Get started by adding sample data.</p>
      <div className='mt-6'>
        <button
          onClick={handleLoadData}
          type='button'
          className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Load Data <CloudArrowDownIcon className='ml-3 -mr-1 h-5 w-5' />
        </button>
      </div>
    </div>
  )
}
