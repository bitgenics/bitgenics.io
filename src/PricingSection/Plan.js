import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Outer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  @media(min-width: 768px){
    width: 33.3%;
    display: inline-block;
    vertical-align: middle;
  }
`

const Box = styled.div`
  box-shadow: 0 0 25px 0 rgba(0,0,0,.04);
  background: white;
  border: 1px solid #ececec;
  border-radius: 6px;
  overflow: hidden;
`

const Title = styled.h4`
  font-weight: 400;
  font-size: 19px;
  margin-top: 0;
  @media(min-width: 768px) {
    margin-bottom: ${props => props.primary ? '32px' : '26px'};
  }
  
`

const ChildrenWrapper = styled.div`
  @media(min-width: 768px) {
    margin-bottom: ${props => props.primary ? '40px' : '0px'};
  }
`

const Price = styled.h4`
  font-weight: 300;
  line-height: 65px;
  margin: 0;
  margin-bottom: 13px;
  font-size: 56px;
  @media(min-width: 993px){
    font-size: 59px;
  }
`

const Dollar = styled.span`
  font-size: 30px;
  vertical-align: middle;
  position: relative;
  top: -8px;
`

const Month = styled.span`
  vertical-align: middle;
  position: relative;
  bottom: -8px;
  font-size: 27px;
  @media(min-width: 993px){
    font-size: 30px;
  }
`

const PriceValue = styled.span`
  vertical-align: middle;
`

const DefaultButton = styled.a`
  width: 100%;
  background-color: ${props => props.primary ? '#65457b' : '#e46784'};
  display: block;
  color: white;
  padding-top: 13px;
  padding-bottom: 13px;
  font-size: 14px;
  text-decoration: none;
  transition: .1s linear;
  &:hover {
    background-color: ${props => props.primary ? '#3e2b4c' : '#6e3460'};
  }
`

const StyledLink = styled(Link)`
  width: 100%;
  background-color: ${props => props.primary ? '#65457b' : '#e46784'};
  display: block;
  color: white;
  padding-top: 13px;
  padding-bottom: 13px;
  font-size: 14px;
  text-decoration: none;
  transition: .1s linear;
  &:hover {
    background-color: ${props => props.primary ? '#3e2b4c' : '#6e3460'};
  }
`

const BoxInner = styled.div`
  position: relative;
  padding: 36px;
  @media(min-width: 993px){
    padding: 39px;
  }

`

class Plan extends Component {

  static defaultProps = {
    buttonLabel: 'Purchase Now',
  }

  render = () => {
    const {
      title,
      href,
      price,
      buttonLabel,
      primary,
      children,
      to,
      id
    } = this.props

    var Button = to ? StyledLink : DefaultButton

    return <Outer>
      <Box>
        <BoxInner>
          <Title primary={primary}>{title}</Title>
          <Price>
            <Dollar>$</Dollar>
            <PriceValue>{Math.round(price / 100)}</PriceValue>
            <Month>/mth</Month>
          </Price>
          <ChildrenWrapper primary={primary}>
            {children}
          </ChildrenWrapper>
        </BoxInner>
        <Button
          primary={primary}
          id={id}
          href={href}
          to={to}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Outer>
  }
}

export default Plan
