import { RouterProvider } from './context/RouterContext'
import { Route } from './router/Route'
import { routes } from './routes'
import { Link } from './router/Link'
import './App.css'

function App() {
  return (
    <div className="App">
      <RouterProvider routeList={routes}>
        <Route path={routes.home.path}>
          <p>Homepage</p>
          <Link to={routes.about.path}>Go to about</Link>
        </Route>

        <Route path={routes.about.path}>
          <p>About</p>
          <Link to={routes.home.path}>Go to home</Link>
        </Route>
      </RouterProvider>

      <p>Notice that the page is not refreshing.</p>
    </div>
  )
}

export default App
