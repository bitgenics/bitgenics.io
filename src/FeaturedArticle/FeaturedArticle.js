import React from 'react'
import styled from 'styled-components'
import Row from './../Row'
import Tag from './../Tag'
import AuthorWidget from './../AuthorWidget'

const FeaturedArticle = styled.div`
  background-color: #f2f2f2;
  padding-top: 100px;
  padding-bottom: 100px;
`

const StyledImage = styled.img`
  display: none;
  box-shadow: #989797 0px 0px 40px 2px;
  @media(min-width: 768px){
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    
  }
`

const Content = styled.div`
  position: relative;
  box-sizing: border-box;
  text-align: left;
  @media(min-width: 768px){
    display: inline-block;
    vertical-align: middle;
    width: ${props => props.image ? '50%' : 'undefined'};
    padding-right: 42px;
  }
`

const Title = styled.h1`
  font-size: 45px;
  letter-spacing: 3px;
  line-height: normal;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Summary = styled.p`
  font-size: 25px;
  line-height: 40px;
`

const RegularImage = styled.img`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 50px;
  @media(min-width: 768px){
    display: none;
  }
`

export default ({image, ...otherProps}) => <FeaturedArticle {...otherProps}>
  <Row>
    <Content image={image}>
      {image ? <RegularImage src={image} /> : null}
      <Tag>Today's article</Tag>
      <Title>4 Freelancers Discuss Working In NYC</Title>
      <AuthorWidget />
      <Summary>
        Most creatives yearn to feel free of the confines of their cubicle,
        to pursue their craft and choose their clientele. And they're in good
        company. About 34% of...
      </Summary>
    </Content>
    {image ? <StyledImage src={image} /> : null}
  </Row>
</FeaturedArticle>