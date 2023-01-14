import data, { TypeNetworkData } from '../data'
import { findDegreeOfSeparation } from '../utils/bfs'
import { findAllDegreeOfSeparation } from '../utils/dfs'

import { useEffect, useState } from 'react'

import AddConnection from './components/AddConnection'
import AddPeople from './components/AddUser'
import FindConnections, { FindConnectionsModal } from './components/FindConnections'
import ListUsers from './components/ListUsers'
import LoadData from './components/LoadData'
import SelectUsers from './components/SelectUsers'

type TypeResult = { degree: number; path: string[] }
const initialResult = { degree: 0, path: [] }

export default function App() {
  const [networkData, setNetworkData] = useState<TypeNetworkData>(
    JSON.parse(localStorage.getItem('networkData')!) || []
  )
  const [user1, setUser1] = useState('1')
  const [user2, setUser2] = useState('1')
  const [dfsResult, setDfsResult] = useState<TypeResult>(initialResult)
  const [bfsResult, setBfsResult] = useState<TypeResult>(initialResult)
  const [open, setOpen] = useState(false)

  const loadData = (): void => {
    localStorage.setItem('networkData', JSON.stringify(data))
    setNetworkData(networkData)
    console.log('sample data loaded')
  }

  useEffect(() => {
    try {
      localStorage.setItem('networkData', JSON.stringify(networkData))
    } catch (err: unknown) {
      console.error(err)
    }
  }, [networkData])

  const handleAddConnection = () => {
    console.log('handleAddConnection')
    if (!user1 || !user2) {
      console.error('user1 and user2 are required')
      return
    }
    const updatedData = networkData.map((user) => {
      if (user.id === user1 && !user.connections.includes(user2)) {
        user.connections.push(user2)
      }
      if (user.id === user2 && !user.connections.includes(user1)) {
        user.connections.push(user1)
      }
      return user
    })
    setNetworkData(updatedData)
  }
  const handleFindDegreeOfSeparation = () => {
    setBfsResult(findDegreeOfSeparation(networkData, user1, user2))
    console.log(findDegreeOfSeparation(networkData, user1, user2))
    setDfsResult(findAllDegreeOfSeparation(networkData, user1, user2))
    console.log(findAllDegreeOfSeparation(networkData, user1, user2))
  }

  return (
    <>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  overflow-hidden shadow rounded-lg divide-y divide-gray-200  flex-col flex'>
        <div className='flex items-center justify-center p-5'>
          <h3 className='text-xl font-bold  text-gray-900'>Six Hops</h3>
        </div>
        <div className='px-4 py-5 sm:px-6 flex  items-end gap-4'>
          <AddPeople setNetworkData={setNetworkData} networkData={networkData} />
          <LoadData handleLoadData={loadData} />
        </div>
        <div className='px-4 py-4 sm:px-6 sm:flex-row flex-col flex sm:items-end sm:justify-between gap-4'>
          <SelectUsers
            setNetworkData={setNetworkData}
            networkData={networkData}
            setUser1={setUser1}
            setUser2={setUser2}
          />
          <div className='flex justify-start gap-4 w-full'>
            <AddConnection handleAddConnection={handleAddConnection} />
            <FindConnections
              handleFindDegreeOfSeparation={handleFindDegreeOfSeparation}
              setOpen={setOpen}
            />
            <FindConnectionsModal
              setOpen={setOpen}
              open={open}
              dfsResult={dfsResult}
              bfsResult={bfsResult}
            />
          </div>
        </div>
        <div className='px-4 py-5 sm:p-6 overflow-scroll'>
          <div>Users</div>
          <ListUsers
            setNetworkData={setNetworkData}
            networkData={networkData}
            handleLoadData={loadData}
          />
        </div>
      </main>
    </>
  )
}
