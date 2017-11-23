import React from 'react'
import styled, { css } from 'styled-components'
import Row from './../Row'
import { Link } from 'react-router-dom'
import SmallAuthor from './../SmallAuthor'
import Tag from './../Tag'

const Story = styled.div`
  @media(min-width: 990px){
    height:400px;
  }
  box-shadow: 0px 0px 15px #989797;
  display:block;
  margin:auto;
  text-align: left;
  margin-bottom: 50px;
  position: relative;
`

const StoryImage = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  height: 235px;
  @media(min-width: 990px){
    width: 400px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
  max-width: 100%;
  background-size: cover;
  
`

const StoryOverview = styled.div`
  @media(min-width: 990px){
    padding-right: ${props => props.noImage ? '40px' : '490px'};
  }
  padding: 40px;
  box-sizing: border-box;
`

const Title = styled.div`
  font-weight: bold;
  color: black;
  font-size: 1.4em;
`

const RoundedImage = styled.div`
  border-radius: 15px;
  height: 1em;
  width: 1em;
`

const Snippet = styled.div`
  text-align: left;
  line-height: 1em;
`



const StyledLink = styled(Link)`
  margin: 2em 0;
  display: inline-block;
  text-decoration: none;
  color: inherit;
`

export default props => <Story>
  {props.image ? <StoryImage src={props.image} /> : null}
  <StoryOverview noImage={!props.image}>
    <Tag pink>Top Pick</Tag>
    <Title>Donnec mon massa eleifid</Title>
    <SmallAuthor profileImage={props.profileImage}>
      by {props.author} &bull; 3rd Oct 2017
    </SmallAuthor>
    <Snippet>
      {props.children}
    </Snippet>
    <StyledLink to="/blog/article" >
      Read more &rarr;
    </StyledLink>
  </StoryOverview>
</Story>