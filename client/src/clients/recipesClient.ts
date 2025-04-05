const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchRecipes = async (
  filters: { ingredient?: string; country?: string; category?: string } = {},
) => {
  const params = new URLSearchParams(filters as Record<string, string>)
  const response = await fetch(`${BASE_URL}/recipes?${params.toString()}`)
  const data = await response.json()
  return data
}

export const fetchRecipeById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/recipes/${id}`)
  const data = await response.json()
  return data
}
