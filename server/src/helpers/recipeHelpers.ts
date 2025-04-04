import { Ingredient, Recipe, RecipeShort } from "../types/recipe";

export const parseRecipe = (raw: any): Recipe => {
  const ingredients: Ingredient[] = [];

  for (let i = 1; i <= 20; i++) {
    const name = raw[`strIngredient${i}`];
    const measure = raw[`strMeasure${i}`];

    if (name && name.trim()) {
      ingredients.push({
        name: name.trim(),
        measure: (measure || "").trim(),
      });
    }
  }

  return {
    id: raw.idMeal,
    name: raw.strMeal,
    thumbnail: raw.strMealThumb,
    category: raw.strCategory,
    area: raw.strArea,
    instructions: raw.strInstructions,
    youtube: raw.strYoutube || null,
    tags: raw.strTags ? raw.strTags.split(",").map((t: string) => t.trim()) : null,
    source: raw.strSource || null,
    ingredients,
  };
}

export const parseRecipeShort = (raw: any): RecipeShort => {
  return {
    id: raw.idMeal,
    name: raw.strMeal,
    thumbnail: raw.strMealThumb,
  };
}