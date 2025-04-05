import { Request, Response } from 'express'
import { fetchRecipes, fetchRecipeById } from '../clients/recipesClient'
import { parseRecipe, parseRecipeShort } from '../helpers/recipeHelpers'

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const { ingredient, country, category } = req.query

    const filters = {
      ingredient: ingredient?.toString(),
      country: country?.toString(),
      category: category?.toString(),
    }

    const data = await fetchRecipes(filters)

    if (!data.meals) {
      res.status(404).json({ message: 'Recipes not found' })
      return
    }

    const recipes = data.meals.map(parseRecipeShort)

    res.json(recipes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to fetch recipes' })
  }
}

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    if (!id) {
      res.status(400).json({ message: 'Recipe id is required' })
      return
    }

    const data = await fetchRecipeById(id)

    if (!data.meals || !data.meals[0]) {
      res.status(404).json({ message: 'Recipe not found' })
      return
    }

    const recipe = parseRecipe(data.meals[0])

    res.json(recipe)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to fetch recipe by id' })
  }
}
