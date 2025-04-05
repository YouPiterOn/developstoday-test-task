export type Ingredient = {
  name: string
  measure: string
}

export type Recipe = {
  id: string
  name: string
  thumbnail: string
  category: string
  area: string
  instructions: string
  youtube: string | null
  tags: string[] | null
  source: string | null
  ingredients: Ingredient[]
}

export type RecipeShort = {
  id: string
  name: string
  thumbnail: string
}
