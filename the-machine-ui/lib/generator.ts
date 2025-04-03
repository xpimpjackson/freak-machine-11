export async function generateOutput({ tone, boldness, weirdness, chaos }: {
  tone: string
  boldness: number
  weirdness: number
  chaos: number
}): Promise<string> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tone, boldness, weirdness, chaos }),
  })

  const data = await response.json()
  return data.result || "No output generated."
}
