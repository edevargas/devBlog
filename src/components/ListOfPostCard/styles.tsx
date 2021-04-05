import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  @media (min-width: 800px) {
    width: 80%;
    margin: 0 auto;
  }
`
export const CardBox = styled.div`
  min-width: 300px;
    padding: 0 15px;
    width: 100%;
    margin-bottom: 20px;
`