import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

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

export default (props) => 
  <Link href="/" passHref>
    <a>
      <Logo alt="Logo" src="/static/full_logo.svg" {...props} />
    </a>
  </Link>