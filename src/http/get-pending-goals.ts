export async function getPendingGoals() {
  const response = await fetch('http://localhost:3333/pending-goals')
  return response.json()
}
