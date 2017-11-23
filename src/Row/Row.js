import styled from 'styled-components'

const Row = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 1200px) { 
    width: 1170px;
  }
  @media(max-width: 990px) {
    max-width: 750px;
  }
`

export default Row