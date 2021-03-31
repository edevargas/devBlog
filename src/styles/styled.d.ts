import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface devBlogTheme {
    borderRadius: string

    colors: {
      main: string;
      secondary: string
    }
  }
}