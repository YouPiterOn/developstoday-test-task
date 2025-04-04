import { useState, useEffect } from "react"
import RecipeCard from './RecipeCard'
import { RecipeShort, RecipeShortListSchema } from "../schema/recipeSchema"
import { fetchRecipes } from "../clients/recipesClient"

export function RecipeList() {
  const [recipes, setRecipes] = useState<RecipeShort[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true)

        const data = await fetchRecipes();

        const validationResult = RecipeShortListSchema.safeParse(data)

        if (!validationResult.success) {
          setError("Invalid data received from server")
          return
        }

        setRecipes(validationResult.data)
        setError(null)
      } catch (err) {
        setError("Failed to fetch recipes")
      } finally {
        setLoading(false)
      }
    }

    getRecipes()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-64 bg-gray-200 rounded-md animate-pulse"></div>
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>
  }

  if (recipes.length === 0) {
    return <div className="p-4">No recipes found</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe, i) => (
        <RecipeCard recipe={recipe} key={i}/>
      ))}
    </div>
  )
}

