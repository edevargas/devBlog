import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import theme from './styles/devBlogTheme'

ReactDOM.render(
    <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </MuiThemeProvider>
    </StylesProvider>, document.getElementById('root'))