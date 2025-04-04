import { Link } from "wouter"

const HomePage = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to The Recipe book</h1>
        <p className="mb-4">Explore a variety of recipes to inspire your next meal.</p>
        <Link
          to="/recipes"
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition duration-300"
        >
          View Recipes
        </Link>
      </div>
    </div>
  )
}

export default HomePage