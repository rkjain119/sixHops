import { Props } from '../../data'

interface PropsF extends Props {
  setUser1: (user1: string) => void
  setUser2: (user2: string) => void
}

export default function SelectUsers({ networkData, setNetworkData, setUser1, setUser2 }: PropsF) {
  return (
    <div className='flex gap-4'>
      <div>
        <label htmlFor='user 1' className='block text-sm font-medium text-gray-700'>
          user 1
        </label>
        <select
          id='user 1'
          name='user 1'
          onChange={(e) => setUser1(e.target.value)}
          className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
        >
          {networkData?.map((user, indx) => (
            <option value={user.id} key={indx}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='user2' className='block text-sm font-medium text-gray-700'>
          User 2
        </label>
        <select
          id='user2'
          name='user2'
          onChange={(e) => setUser2(e.target.value)}
          className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
        >
          {networkData?.map((user, indx) => (
            <option value={user.id} key={indx}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
