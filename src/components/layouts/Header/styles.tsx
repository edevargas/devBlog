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
`
export const AuthorHeaderContainer = styled.div`
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
