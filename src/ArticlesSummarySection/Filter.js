import React from 'react'
import styled from 'styled-components'
import { List, Item, StyledLink } from './../HorizontalList'

const Filter = styled.div`
  display: inline-block;
  vertical-align: middle;

  line-height: 50px;
  @media(min-width: 768px){
    height: 50px;
  }
`

export default props => <Filter {...props}>
  <List>
    <Item>All</Item>
    <Item>The first five</Item>
    <Item>Industry Insight</Item>
    <Item>Press &amp; Media</Item>
    <Item>Client Spotlight</Item>
  </List>
</Filter>