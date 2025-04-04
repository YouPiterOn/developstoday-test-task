import { Route, Switch } from "wouter"
import Layout from "./pages/Layout"
import RecipeListPage from "./pages/RecipeListPage"
import RecipeInfoPage from "./pages/RecipeInfoPage"

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" component={RecipeListPage} />
          <Route path="/recipe/:id" component={RecipeInfoPage} />
        </Switch>
      </Layout>
    </>
  )
}

export default App
