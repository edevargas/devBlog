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
import Layout from './components/layouts/Layout'
const AuthorPostsPage = React.lazy(() => import('./pages/AuthorPostsPage'))
const HomePage = React.lazy(() => import('./pages/HomePage'))
const PostDetailPage = React.lazy(() => import('./pages/PostDetailPage'))

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
              <Route exact path="/post/:id" component={PostDetailPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Layout>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}
export default App