import React from 'react'
import styled from 'styled-components'
import TopStory from './TopStory'
import Tag from './../Tag'

const LinksBox = styled.div`
  width: 330px;
  box-shadow: 0px 0px 15px #989797;
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 50px;
  text-align: left;
`

const Title = styled.h3`
  text-transform: uppercase;
`

const Link = styled.a`
  font-size: 14px;
  text-decoration: underline;
  color: #65457b;
  display: block;
  text-underline-position: under;
`

export default props => <LinksBox {...props}>
  <Title>Top Stories</Title>
  <TopStory 
    image={require('./domenico-loia-310197.jpg')}
  >
    4 Freelancers Discuss Working In NYC
  </TopStory>
  <TopStory 
    image={require('./domenico-loia-310197.jpg')}
  >
    4 Freelancers Discuss Working In NYC
  </TopStory>
  <TopStory 
    image={require('./domenico-loia-310197.jpg')}
  >
    4 Freelancers Discuss Working In NYC
  </TopStory>
  <Title>Categories</Title>
  <Tag pink>Top Pick</Tag>
  <Tag pink>The First Five</Tag>
  <Tag pink>Industry Insight</Tag>
  <Tag pink>Press & Media</Tag>
  <Tag pink>Client Spotlight</Tag>

  <Title>External Links</Title>
  <Link>4 Freelancers Discus Working In NYC</Link>
  <Link>How side projects saved our startup</Link>
  <Link>The two most important questions
    when scoping your MVP</Link>
</LinksBox>