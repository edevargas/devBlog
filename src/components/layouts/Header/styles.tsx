import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
`
interface MainHeaderProps {
    readonly accentBg: boolean;
}

export const MainHeader = styled.div<MainHeaderProps>`
${props => props.accentBg && css`
${({ theme }) => `
        background-color: ${theme.palette.primary.main};
    `}
    & button {
        color: white;
    }
  `}
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 100%;
    padding: 10px 15px;
    @media (min-width: 800px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
  }
`
export const AlternativeHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
export const AuthorName = styled.h1`
    ${({ theme }) => `
        color: ${theme.palette.primary.main};
    `}
    font-size: 1.4rem;
`
export const SearchContainer = styled.span`
    
    @media (min-width: 800px) {
        margin-right: -36%;
  }
  @media (min-width: 1013px) {
    margin-right: -30%;
  }
`
export const OrderButtonContainer = styled.span`
    
    @media (min-width: 800px) {
        align-self: flex-end;
  }
`
export const OrderButtonAndAuthorContainer = styled.span`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const OrderButtonDesktopContainer = styled.span`  
    min-width: 200px;
    text-align: right;
`
