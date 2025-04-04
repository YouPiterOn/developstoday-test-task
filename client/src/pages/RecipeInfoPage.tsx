import { useEffect, useState } from "react"
import { fetchRecipeById } from "../clients/recipesClient"
import { useLocation, useParams } from "wouter";
import { Recipe, RecipeSchema } from "../schema/recipeSchema";

const RecipeInfoPage = () => {
  const { id } = useParams<{ id: string }>()
  const [_, navigate] = useLocation();
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getRecipe = async () => {
      try {
        setLoading(true)
        const recipeData = await fetchRecipeById(id)

        const validationResult = RecipeSchema.safeParse(recipeData)

        if (!validationResult.success) {
          setError("Invalid data received from server")
          return
        }

        setRecipe(validationResult.data)
        setError(null)
      } catch (err) {
        setError("Failed to fetch recipe")
      } finally {
        setLoading(false)
      }
    }

    getRecipe()
  }, [id])

  if (loading) {
    return (
      <div className="p-4">
        <div className="h-64 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    )
  }

  if (error || !recipe) {
    navigate("/404")
    return
  }

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
        <img
          src={recipe.thumbnail}
          alt={recipe.name}
          className="w-64 h-64 object-cover rounded-lg mb-4"
        />
        <div className="text-center">
          <p><strong>Category:</strong> {recipe.category}</p>
          <p><strong>Area:</strong> {recipe.area}</p>
        </div>

        <h2 className="text-2xl mt-6 mb-4">Instructions</h2>
        <p>{recipe.instructions}</p>

        {recipe.youtube && (
          <div className="mt-4">
            <a href={recipe.youtube} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Watch Recipe Video
            </a>
          </div>
        )}

        {recipe.tags && recipe.tags.length > 0 && (
          <div className="mt-4">
            <strong>Tags:</strong>
            <ul className="list-disc list-inside">
              {recipe.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        )}

        {recipe.source && (
          <div className="mt-4">
            <a href={recipe.source} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Recipe Source
            </a>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Ingredients</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.measure} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeInfoPage