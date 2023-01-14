import { TypeNetworkData } from '../data'

export const findAllDegreeOfSeparation = (
  data: TypeNetworkData,
  userAName: string,
  userBName: string
): { degree: number; path: string[] } => {
  const userA = data.find((u) => u.id === userAName)
  if (!userA) throw new Error(`User with name ${userAName} not found`)
  const userB = data.find((u) => u.id === userBName)
  if (!userB) throw new Error(`User with name ${userBName} not found`)

  const stack = [[userA.id]]
  const visited = new Set<string>()
  const paths: string[] = []

  while (stack.length > 0) {
    const currentPath = stack.pop()!
    const currentUserId = currentPath[currentPath.length - 1]
    const currentUser = data.find((user) => user.id === currentUserId)
    if (!currentUser) throw new Error(`User with id ${currentUserId} not found`)
    if (visited.has(currentUserId)) continue
    visited.add(currentUserId)
    if (currentUserId === userB.id) {
      paths.push(...currentPath.map((id) => data.find((user) => user.id === id)!.name))
    }
    currentUser.connections.forEach((connectionId) => {
      if (!visited.has(connectionId)) {
        stack.push([...currentPath, connectionId])
      }
    })
  }
  if (paths.length === 0) throw new Error(`No path between ${userAName} and ${userBName}`)
  return {
    degree: paths.length,
    path: paths,
  }
}
