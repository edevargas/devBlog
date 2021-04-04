import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 15px;
`
export const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
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
