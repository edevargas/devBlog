import styled from 'styled-components'

export const PostContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
`
export const ImageBox = styled.figure`
      width: 100%;
    height: 40vh;
    overflow: hidden;
    & img {
        width: 100%;
    }
`
export const BodyBox = styled.div`
  width: 100%;
`
export const Title = styled.h1`
  ${({ theme }) => `
        color: ${theme.palette.primary.main};
    `}
    font-size: 1.6rem;
    margin: 20px 0;
`

export const PostDate = styled.p`
  ${({ theme }) => `
        color: ${theme.palette.secondary.light};
    `}
    font-size: 1.3rem;
`
