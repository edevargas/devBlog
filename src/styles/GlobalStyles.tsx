import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

        html {
                box-sizing: border-box;
                font-family: 'Montserrat', sans-serif;
                font-size: 62.5%; /* with this we achive 1rem == 10 px*/
        }
        
        *, *::before, *::after {
                box-sizing: border-box;
	        margin: 0;
	        padding: 0;
        }
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }
        h2 {
	font-size: 4rem;
	color: #333;
        }
        h3 {
	font-size: 2rem;
	color: #333;
        }
        a{
                text-decoration: none;
                font-size: 1.6rem
        }
        p {
                font-size: 1.6rem
        }

        ul {
                list-style: none;
                padding: 0;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }

        header {
	width: 100vw;
	height: 15vh;
	background-color: white;
        }
        main {
	width: 100vw;
	height: 70vh;
	font-size: 1.8rem;
        background: #f3f3f3;
        }
        footer {
	width: 100vw;
	height: 15vh;
	background: #f3f3f3;;
        }

        
        
        `
