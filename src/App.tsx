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
import theme from './styles/devBlogTheme'
import { ThemeProvider } from '@material-ui/core/styles'

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<MiniLoader />}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  )
}
export default App