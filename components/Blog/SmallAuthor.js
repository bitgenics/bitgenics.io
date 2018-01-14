import React from 'react'
import styled from 'styled-components'

const Author = styled.div`
  font-size: .8em;
  margin: 1em 0;
  position: relative;
  text-align: left;
  display: inline-block;
`

const Image = styled.div`
  background-image: url(${props => props.profileImage});
  border-radius: 50%;
  height: 2em;
  width: 2em;
  background-size: cover;
  display: inline-block;
  margin: 0 10px 0 0;
  position: absolute;
`

const Text = styled.div`
  margin-left: 2.5em; 
  color: grey; 
  font-weight: bold;
`

export default props => <Author>
  <Image profileImage={props.profileImage} />
  <Text style={{  }}>
    {props.children}
  </Text>
</Author>
