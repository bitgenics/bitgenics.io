import styled from 'styled-components'
import React from 'react'

const Button = styled.a`

`

const StyledSpan = styled.span`
  font-size: .85714286em;
`

export default styled(({ children, ...otherProps }) => <Button {...otherProps}>
  <StyledSpan>
    {children}
  </StyledSpan>
</Button>)`
  font-family: 'Open Sans',Helvetica,Arial,sans-serif;
  transition: .1s linear;
  -webkit-transition: .1s linear;
  -moz-transition: .1s linear;
  border-radius: 6px;
  border: 1px solid #252525;
  font-size: inherit;
  padding: .46428571em 2.78571429em;
  padding: .30952381em 1.85714286em;
  font-family: 'Lato','Verdana','Helvetica', sans-serif;
  letter-spacing: .5px;
  background-color: ${props => props.alternate ? '#65457b' : '#e46784'};
  border-color: ${props => props.alternate ? '#65457b' : '#e46784'};
  box-sizing: border-box;
  color: white;
  text-transform: uppercase;
  font-size: .85714286em;
  font-weight: bold;
  padding: .30952381em 1.85714286em;
  user-select: none;
  line-height: 1.85714286em;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  &:hover {
    transform: translate3d(0,-2px,0);
    -webkit-transform: translate3d(0,-2px,0);
  }
`