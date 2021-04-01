import React, { Suspense } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { MiniLoader } from './components/layouts/MiniLoader'
import NotFoundPage from './pages/NotFoundPage'
import { GlobalStyles } from './styles/GlobalStyles'
import HomePage from './pages/HomePage'
import Layout from './components/layouts/Layout'
const AuthorPostsPage = React.lazy(() => import('./pages/AuthorPostsPage'))

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<MiniLoader />}>
          <Router>
          <Layout>
            <GlobalStyles />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/author/:id" component={AuthorPostsPage} />
              <Route component={NotFoundPage} />
            </Switch>
            </Layout>
          </Router>
      </Suspense>
    </ErrorBoundary>
  )
}
export default App