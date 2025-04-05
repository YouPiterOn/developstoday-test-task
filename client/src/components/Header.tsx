import { Link } from 'wouter'

const Header = () => {
  return (
    <header className="bg-cyan-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center text-xl font-bold">
          The Recipe book
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/recipes" className="hover:underline">
                Recipes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
