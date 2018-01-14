import React from 'react'
import styled from 'styled-components'

const AuthorWidget = styled.div`
  
`

const ProfilePic = styled.img`
  vertical-align: middle;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

const AuthorText = styled.h4`
  display: inline-block;
  vertical-align: middle;
  font-family: OpenSans;
  font-size: 18px;
`

export default props => <AuthorWidget {...props}>
  <ProfilePic src='/static/placeholder/timothy-paul-smith-351366.jpg'/>
  <AuthorText>by Jane Smith</AuthorText>
</AuthorWidget>