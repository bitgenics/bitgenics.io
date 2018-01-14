import React from 'react'
import styled from 'styled-components'

const Title = styled.h4`
  font-size: 19px;
  line-height: 26px;
  color: white;
  font-weight: 400;
  margin-top: 13px;
  margin-bottom: 6.5px;
`

const Feature = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  display: inline-block;
  @media(min-width: 768px){
    width: 50%;
  }
  @media(min-width: 992px){
    width: 25%;
  }
`

const Text = styled.div`
  opacity: 0.9;
  font-size: 14px;
  line-height: 26px;
`

export default ({ text, title, icon, ...otherProps }) => <Feature {...otherProps}>
  {icon}
  <Title>{title}</Title>
  <Text>{text}</Text>
</Feature>