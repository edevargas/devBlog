import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  padding: 10px 15px;
  display: flex;
  height: 5rem;
  align-items: center;
  cursor: pointer;
  background: white;
`
export const AuthorDetail = styled.section`
  display: flex;
  height: 5rem;
`
export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.p`
${({ theme }) => `
        color: ${theme.palette.primary.main};
    `}
  font-size: 14rem;
`
export const Email = styled.p`
${({ theme }) => `
        color: ${theme.palette.primary.light};
    `}
  font-size: 12rem;
`
export const ProfilePhoto = styled.figure`
  width:3rem;
  height: 3rem;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`

export const Body = styled.section`
  margin: 10px 0;
`
export const ImgContainer = styled.figure`
  width: 100%;
  height: auto;
  & > img {
    width: 100%;
    height: 100%;
  }
`

export const FooterContent = styled.section`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h4`
${({ theme }) => `
        color: ${theme.palette.primary.main};
    `}
`
export const PostDate = styled.p`
${({ theme }) => `
        color: ${theme.palette.primary.light};
    `}
    font-size: 13rem;
`