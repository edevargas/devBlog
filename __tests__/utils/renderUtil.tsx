import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { PostsSlice } from '../../src/reducers/postsReducer'
import { PeopleSlice } from '../../src/reducers/peopleReducers'
import { configureStore } from '@reduxjs/toolkit'
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import theme from '../../src/styles/devBlogTheme'
import {
  HashRouter as Router
} from 'react-router-dom'

function render(ui, ...renderOptions) {
  const Wrapper: React.FC = ({ children }) => {
    const store = configureStore({
      reducer: {
        posts: PostsSlice.reducer,
        people: PeopleSlice.reducer
      }
    })
    return <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Router>
              {children}
            </Router>
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }