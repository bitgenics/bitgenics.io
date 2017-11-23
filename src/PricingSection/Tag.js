import React from 'react'
import styled from 'styled-components'

const Tag = styled.div`
  background-color: #65457b;
  color: white;
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .5px;
  text-transform: uppercase;
  height: 26px;
  min-width: 65px;
  padding: 0 10px;
  border-radius: 50px;

  position: absolute;
  top: 10px;
  right: 10px;
`

export default ({children, otherProps}) => <Tag {...otherProps}>
  {children}
</Tag>