import React from 'react'
import styled from 'styled-components'
import Row from './../Row'

const AuthorSection = styled.div`
  margin-bottom: 60px;
  @media(min-width: 768px){
    margin-bottom: 80px;
  }
  @media(min-width: 990px){
    margin-bottom: 110px;
  }
`

const Author = styled.img`
  display: block;
  margin: 0 auto;
  @media(min-width: 768px){
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Content = styled.div`

  position: relative;
  @media(min-width: 768px){
    padding-left: 160px;
  }
`

const Title = styled.h3`
  @media(max-width: 767px){
    text-align: center;
    width: 100%;
  }
`

export default props => <Row>
  <AuthorSection {...props}>
    <Content>
      <Author src={require('./author.png')} />
      <Title>Jane Smith</Title>
      <p>
        Jane is a contributor for Hustle & Co, the leading publication devoted 
        to educating and empowering the future workforce. Beyond offering up 
        insights here, Arielle is a freelance writer and content strategist who 
        writes for publications like TrendLand, Travel Dose, The Culture Trip 
        and VIVA Lifestyle & Travel. In her free time, she loves watching 
        documentary films, listening to 70s folk, and teaching meditation 
        (perhaps all at the same time).
      </p>
    </Content>
  </AuthorSection>
</Row>