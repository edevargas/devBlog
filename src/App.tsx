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
const AuthorPostsPage = React.lazy(() => import('./pages/AuthorPostsPage'))

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<MiniLoader />}>
        <Router>
          <GlobalStyles />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/author" component={AuthorPostsPage} />     
              <Route component={NotFoundPage} />
            </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}
export default App