import { z } from 'zod'

export const IngredientSchema = z.object({
  name: z.string(),
  measure: z.string(),
})

export const RecipeShortSchema = z.object({
  id: z.string(),
  name: z.string(),
  thumbnail: z.string().url(),
})

export const RecipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  thumbnail: z.string().url(),
  category: z.string(),
  area: z.string(),
  instructions: z.string(),
  youtube: z.string().url().nullable(),
  tags: z.array(z.string()).nullable(),
  source: z.string().url().nullable(),
  ingredients: z.array(IngredientSchema),
})

export const RecipeShortListSchema = z.array(RecipeShortSchema)

export type Ingredient = z.infer<typeof IngredientSchema>
export type RecipeShort = z.infer<typeof RecipeShortSchema>
export type Recipe = z.infer<typeof RecipeSchema>
