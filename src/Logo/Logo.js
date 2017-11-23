import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  height: 36px;
  vertical-align: middle;
  margin: 0 15px;
  position: relative;
`

export default props => <Logo 
  alt="logo" 
  src={require('./full_logo.svg')} 
  {...props}
/>