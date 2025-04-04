const BASE_URL = `${process.env.MEALDB_BASE_URL}/${process.env.MEALDB_API_KEY}`

export const fetchRecipes = async (
  filters: { ingredient?: string; country?: string; category?: string } = {},
) => {
  let url = `${BASE_URL}/search.php?s=`
  if (filters.ingredient) {
    url = `${BASE_URL}/filter.php?i=${filters.ingredient}`
  } else if (filters.country) {
    url = `${BASE_URL}/filter.php?a=${filters.country}`
  } else if (filters.category) {
    url = `${BASE_URL}/filter.php?c=${filters.category}`
  }

  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const fetchRecipeById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  const data = await response.json()
  return data
}
