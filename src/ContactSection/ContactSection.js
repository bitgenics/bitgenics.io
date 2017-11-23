import React, { Component } from 'react'
import Logo from './../Logo'
import styled from 'styled-components'
import Row from './../Row'

const Col = styled.div`
  
  box-sizing: border-box;
  @media(min-width: 768px){
    width: 50%;
    display: inline-block;
    vertical-align: top;
  }
`

const LogoContainer = styled.div`
  display: inline-block;
  text-align: center;
  @media(min-width: 992px){
    min-width: 262px;
  }
`

const ContactSection = styled.div`
  padding-top: 13px;
  padding-bottom: 13px;
`

const EmailInput = styled.input`
  width: 100%;
  padding: 6.5px 13px;
  font-size: 14px;
  border: 1px solid #ABB0B2;
  border-radius: 3px;
  box-sizing: border-box;
`

const Label = styled.label`
  font-size: 12px;
`

const Button = styled.button`
  clear: both;
  background-color: #aaa;
  border: 0 none;
  border-radius: 4px;
  transition: all 0.23s ease-in-out 0s;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: normal;
  height: 32px;
  line-height: 32px;
  margin: 0 5px 10px 0;
  padding: 0 22px;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  width: auto;
`

const SubHeader = styled.h2`
  font-size: 19.6px;
`

export default props => <ContactSection id="signup">
  <Row>
    <Col style={{textAlign: 'left'}}>
      <LogoContainer><Logo /></LogoContainer>
      <p style={{display: 'inline-block'}}>Supercharge your workflow</p>
    </Col>
    <Col style={{textAlign: 'left'}}>
      <SubHeader>Subscribe to our mailing list</SubHeader>
      <Label for="mce-EMAIL">Email Address </Label>
      <EmailInput 
        type="email" 
        value="" 
        name="EMAIL"  
        id="mce-EMAIL" 
        aria-required="true" 
        placeholder="Email Address "
      />
      <Button>Subscribe</Button>
    </Col>
  </Row>
</ContactSection>