import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)`
  color: white;
  padding: 10px 15px;
  display: flex;
  height: 5rem;
  align-items: center;
  background: #d69595;
  cursor: pointer;
  &:hover {
    background: #9e6767;
  }
`
export const IconBox = styled.span`
  padding: 0 10px;
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
