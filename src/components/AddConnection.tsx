import { LinkIcon } from '@heroicons/react/24/solid'

export default function AddConnection({
  handleAddConnection,
}: {
  handleAddConnection: () => void
}) {
  return (
    <button
      onClick={handleAddConnection}
      type='button'
      className='inline-flex items-center px-3 py-2  border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      Add Connection <LinkIcon className='ml-3 -mr-1 h-5 w-5' />
    </button>
  )
}
