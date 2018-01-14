import React from 'react'
import styled from 'styled-components'

const TopStory = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`
const Image = styled.img`
  width: 75px;
  height: 75px;
  display: inline-block;
  vertical-align: top;
  border-radius: 5px;
`

const Content = styled.div`
  padding: 7px 15px;
  display: inline-block;
  vertical-align: top;
  width: 195px;
  box-sizing: border-box;
`

export default props => <TopStory {...props}>
  <Image src={props.image} />
  <Content>{props.children}</Content>
</TopStory>