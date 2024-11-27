export async function getSummary() {
  const response = await fetch('http://localhost:3333/summary')
  return response.json()
}
