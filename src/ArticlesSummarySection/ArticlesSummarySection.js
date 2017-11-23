import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import SearchInput from './SearchInput'
import Row from './../Row'

const StyledFilter = styled(Filter)`
  
`

const FilterContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: left;
`

const StyledSearchInput = SearchInput.extend`
  float: right;
  width: 50%;
  box-sizing: border-box;
  @media(min-width: 768px){
    width: inherit;
  }
`

const ArticlesSummarySection = styled.div`

`

export default props => <ArticlesSummarySection {...props}>
  <Row>
    <FilterContainer>
      <Filter />
      <StyledSearchInput placeholder="Search..." />
      <div style={{clear: 'both'}} />
    </FilterContainer>
  </Row>
</ArticlesSummarySection>