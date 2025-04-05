import { Link } from 'wouter'
import { RecipeShort } from '../schema/recipeSchema'

interface RecipeCardProps {
  recipe: RecipeShort
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link href={`/recipes/${recipe.id}`} className="block group">
      <div className="overflow-hidden transition-all duration-200 hover:shadow-md bg-cyan-50 rounded-md">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={recipe.thumbnail}
            alt={recipe.name}
            className="object-cover transition-transform duration-200 group-hover:scale-105"
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-3 px-5">
          <p className="font-medium text-lg line-clamp-2">{recipe.name}</p>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
