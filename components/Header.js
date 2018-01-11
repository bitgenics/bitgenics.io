import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from './Button'
import Row from './Row'
import { List, Item, StyledLink } from './HorizontalList'

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
const Logo = styled.img`
  height: 36px;
  vertical-align: middle;
  margin: 10px 15px;
  position: relative;
  float: right;
  @media(min-width: 768px){
    float: left;
  }
`

export default props =>
<Header {...props}>
  <Nav>
    <Row>
      <Link href="/">
        <Logo alt="Logo" src="/static/full_logo.svg"/>
      </Link>
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
