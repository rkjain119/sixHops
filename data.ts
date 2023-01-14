const data = [
  { id: '1', name: 'Ayushi', connections: ['2', '4'] },
  { id: '2', name: 'Bhaskar', connections: ['1', '5'] },
  { id: '3', name: 'Kamalnath', connections: ['4', '5'] },
  { id: '4', name: 'Sameer', connections: ['1', '3'] },
  { id: '5', name: 'Shantikumar', connections: ['3', '2'] },
]
export default data

export type TypeNetworkData = typeof data

console.log(typeof data)

export interface Props {
  networkData: TypeNetworkData
  setNetworkData: React.Dispatch<React.SetStateAction<TypeNetworkData>>
}
