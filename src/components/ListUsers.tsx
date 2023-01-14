import { Props } from '../../data'
import { ArrowRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

import Empty from './EmptyState'

interface PropsF extends Props {
  handleLoadData: () => void
}

export default function ListUsers({ networkData, setNetworkData, handleLoadData }: PropsF) {
  console.log('Listing people', networkData)
  if (networkData.length === 0) {
    return <Empty handleLoadData={handleLoadData} />
  }
  return (
    <div className='flex-col flex gap-2'>
      {networkData?.map((user) => (
        <div key={user.id} className='flex gap-2 '>
          <div className='flex items-center gap-1'>
            <span className='inline-flex border border-indigo-500  items-center px-2.5 py-0.5 rounded-md  bg-indigo-200 text-slate-800'>
              {user.name}{' '}
            </span>
            <ChevronDoubleRightIcon className='h-5 w-5 text-slate-400 inline-block' />
          </div>
          <div className='flex gap-2 items-center '>
            {user.connections.map((connections, indx) => (
              <div key={indx} className='flex gap-1 last:[&>*]:last:hidden items-center'>
                <span className='inline-flex border border-indigo-300  items-center px-2.5 py-0.5 rounded-md  bg-indigo-100 text-slate-800'>
                  {networkData.find((user) => user.id === connections)?.name}
                </span>
                <ArrowRightIcon className=' h-5 w-5 text-slate-400 inline-block ' />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
