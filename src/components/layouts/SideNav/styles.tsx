import styled from 'styled-components'

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
`
export const NavHeader = styled.section`
    ${({ theme }) => `
        background-color: ${theme.palette.primary.main};
    `}
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h3 {
        color: white;
    }
`
