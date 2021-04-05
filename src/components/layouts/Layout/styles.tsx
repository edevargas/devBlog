import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 800px) {
    flex-direction: row;
  }
`
