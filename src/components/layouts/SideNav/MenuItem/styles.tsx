import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)`
${({ theme }) => `
        color: ${theme.palette.primary.main};
        background-color: white;
        &:hover {
          color: white;
          background: ${theme.palette.primary.light};
  }
    `}
  padding: 10px 15px;
  display: flex;
  height: 5rem;
  align-items: center;
  cursor: pointer;
`
export const IconBox = styled.span`
  padding-right: 15px;
`
export const ItemIcon = styled.figure`
  width:3rem;
  height: 3rem;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`
