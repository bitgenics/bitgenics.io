import React from 'react'
import styled from 'styled-components'

const Quote = styled.p`
  line-height: 37.5px;
  font-size: 25px;
  font-family: 'Rubik','Helvetica', sans-serif;
  color: #252525;
  font-weight: 300;
  text-align: left;
  margin-top: 0;
`

const Name = styled.h5`
  margin: 0;

`

const Title = styled.div`
  font-size: 14px;
  line-height: 26px;
  text-align: left;
`

const Image = styled.img`
  /*margin-left: 98px;
  margin-right: 98px;*/
  padding: 15px;
  max-width: 100%;
  
  width: 165px;
  @media(min-width: 768px){
    width: 220px;
    height: 200px;
    padding: 0;
    padding-right: 20px;
  }
  @media(min-width: 992px){
    margin-left: 60px;
    width: 165px;
    height: 165px;
    padding: 0;
  }
`

const ImageContainer = styled.div`
  
  position: relative;
  text-align: left;
  @media (min-width: 768px){
    width: 30%;
    display: inline-block;
    vertical-align: top;
  }
`

const Content = styled.div`
  text-align: left;
  @media (min-width: 768px){
    display: inline-block;
    width: 60%;
    vertical-align: top;
    padding-left: 20px;
    box-sizing: border-box;
  }
  @media (min-width: 992px){
    padding-left: 0;
  }
`

export default ({ quote, image, name, title, ...otherProps }) => <div {...otherProps}>
  <ImageContainer>
    <Image alt={name} src={image} />
  </ImageContainer>
  <Content>
    <Quote>
      {quote}
    </Quote>
    <Name>{name}</Name>
    <Title>{title}</Title>
  </Content>
</div>
