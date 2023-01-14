import { TypeNetworkData } from '../data'

export const findDegreeOfSeparation = (
  data: TypeNetworkData,
  userAName: string,
  userBName: string
): { degree: number; path: string[] } => {
  const userA = data.find((u) => u.id === userAName)
  const userB = data.find((u) => u.id === userBName)
  if (!userA || !userB) {
    throw new Error(`User with name ${userAName} or ${userBName} not found`)
  }

  const queue = [userA]
  const visited = new Set<string>()
  const levels = { [userA.id]: 0 }
  const path = { [userA.id]: [userA.name] }

  while (queue.length > 0) {
    const currentUser = queue.shift()!
    if (visited.has(currentUser.id)) {
      continue
    }

    visited.add(currentUser.id)

    if (currentUser.id === userB.id) {
      return {
        degree: levels[userB.id],
        path: path[userB.id],
      }
    }

    currentUser.connections.forEach((connectionId) => {
      const connection = data.find((user) => user.id === connectionId)!
      if (!visited.has(connection.id)) {
        queue.push(connection)
        levels[connection.id] = levels[currentUser.id] + 1
        path[connection.id] = [...path[currentUser.id], connection.name]
      }
    })
  }

  throw new Error(`No path between ${userAName} and ${userBName}`)
}
