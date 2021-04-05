import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    @media (min-width: 800px) {
    width: 300px;
  }
`
export const SideNavTitle = styled.h3`
    margin-bottom: 10px;
`
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    width: 300px;
`
export const SearchContainer = styled.div`
border-radius: 20px 20px 0 0;
    ${({ theme }) => `
        background: ${theme.palette.primary.main};
    `}
`
