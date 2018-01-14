import React from 'react'
import styled from 'styled-components'
import Row from 'components/Row'
import { List, Item, StyledLink } from './../HorizontalList'

const FilterContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: left;
`

const ArticlesSummarySection = styled.div`

`

const Filter = styled.div`
  display: inline-block;
  vertical-align: middle;

  line-height: 50px;
  @media(min-width: 768px){
    height: 50px;
  }
`

export default props => <ArticlesSummarySection {...props}>
  <Row>
    <FilterContainer>
      <Filter>
        <List>
          <Item>All</Item>
          <Item>The first five</Item>
          <Item>Industry Insight</Item>
          <Item>Press &amp; Media</Item>
          <Item>Client Spotlight</Item>
        </List>
      </Filter>
      <div style={{clear: 'both'}} />
    </FilterContainer>
  </Row>
</ArticlesSummarySection>