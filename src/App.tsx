import AddPeople from './components/AddPeople'

export const handleAddPeople = (personName: string) => {
  console.log(personName)
}
export default function App() {
  return (
    <div className='bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200'>
      <div className='px-4 py-5 sm:px-6'>
        <AddPeople handleAddPeople={handleAddPeople} />
      </div>
      <div className='px-4 py-5 sm:p-6'>{/*main */}</div>
      <div className='px-4 py-4 sm:px-6'>{}</div>
    </div>
  )
}
