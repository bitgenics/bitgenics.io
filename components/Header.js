import React, { Component } from 'react'
import styled from 'styled-components'
import Button from 'components/Button'
import Row from 'components/Row'
import Logo from 'components/Logo'
import { List, Item, StyledLink } from 'components/HorizontalList'

const Nav = styled.nav`
  padding: 26px 0;
  text-align: left;
  @media(min-width: 768px){
    text-align: right;
  }
`

const ButtonsWrapper = styled.div`
  @media(min-width: 768px){
    margin-left: 1.85714286em;
    display: inline-block;
  }
`

const StyledButton = styled(Button)`
  
  width: 100%;
  margin-top: 15px;
  @media(min-width: 768px){
    width: auto;
    margin-left: .92857143em;
    margin-right: 15px;
  }
`

const Header = styled.div`
  /* Seems like a bug that the original implementation
     of this hides between 992 and 1200 px */
  /*display: none;
  @media(min-width: 1200px) {
    display: block;
  }*/
`


export default props =>
<Header {...props}>
  <Nav>
    <Row>
      <Logo />
      <List>
        <Item>
          <StyledLink href="#product">
            Product
          </StyledLink>
        </Item>
        <Item>
          <StyledLink href="#features">
            Features
          </StyledLink>
        </Item>
        <Item>
          <StyledLink href="#pricing">
            Pricing
          </StyledLink>
        </Item>
        <Item>
          <StyledLink href="https://blog.bitgenics.io">
            Blog
          </StyledLink>
        </Item>
        <Item>
          <StyledLink href="#signup">
            Sign up
          </StyledLink>
        </Item>
      </List>
      <ButtonsWrapper>
        <StyledButton id="gtm-header-demo-btn" href="https://calendly.com/bitgenics/linc-demo">
          book a demo
        </StyledButton>
        <StyledButton id="gtm-header-download-btn" alternate href="https://github.com/bitgenics/linc-cli">
          download
        </StyledButton>
      </ButtonsWrapper>
    </Row>
  </Nav>
</Header>
