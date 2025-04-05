import { Link } from 'wouter'

const NotFoundPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold mb-4">Not Found</h1>
      <p className="text-muted-foreground mb-8">
        We couldn't find what you were looking for
      </p>
      \<Link href="/recipes">Browse All Recipes</Link>
    </div>
  )
}

export default NotFoundPage
