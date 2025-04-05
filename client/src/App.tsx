import { Route, Switch } from 'wouter'
import Layout from './pages/Layout'
import RecipeListPage from './pages/RecipeListPage'
import RecipeInfoPage from './pages/RecipeInfoPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/recipes" component={RecipeListPage} />
          <Route path="/recipes/:id" component={RecipeInfoPage} />
          <Route path="/404" component={NotFoundPage} />
        </Switch>
      </Layout>
    </>
  )
}

export default App
