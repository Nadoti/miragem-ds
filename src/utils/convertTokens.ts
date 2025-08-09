export function convertTokensToValues(tokens: Record<string, string>) {
  return Object.entries(tokens).reduce((acc, [key, value]) => {
    acc[key] = { value }
    return acc
  }, {} as Record<string, { value: string }>)
}