import React from 'react'
import styled from 'styled-components'
import Button from './../Button'
import Row from './../Row'

const SubscribeSection = styled.div`
  
  margin: 0 auto;
  position: relative;
  @media(min-width: 768px){
    margin-bottom: 110px;
    width: 710px;
  }
  @media(min-width: 990px){
    margin-bottom: 220px;
  }
`

const StyledInput = styled.input`
  width: 508px;
  border-radius: 5px;
  background-color: #e6e6e6;
  padding: 20px;
  border: none;
  margin-right: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: black;
  @media(max-width: 767px){
    width: 100%;
  } 
`

const Title = styled.h3`
  text-transform: uppercase;
  @media(max-width: 767px){
    text-align: center;
    width: 100%;
  }
` 

const StyledButton = styled(Button)`
  height: 50px; 
  line-height: 40px;
  margin-bottom: 20px;
  @media(max-width: 767px){
    width: 100%;
  }
`


export default props => <Row>
    <SubscribeSection>
    <Title>Subscribe</Title>
    <p>Get the best tips and tricks straight to your inbox. 
      Unsubscribe at any time.</p>
    <div>
      <StyledInput placeholder="Email Address" />
      <StyledButton>
        Subscribe
      </StyledButton>
    </div>
  </SubscribeSection>
</Row>