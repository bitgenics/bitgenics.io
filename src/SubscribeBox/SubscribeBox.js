import React from 'react'
import styled from 'styled-components'
import Button from './../Button'

const SubscribeBox = styled.div`
  width: 330px;
  height: 400px;
  box-shadow: 0px 0px 15px #989797;
  margin-bottom: 50px;
`

const Top = styled.div`
  height: 200px;
  color: white;
  text-align: left;
  position: relative;
  background-color: white;
`

const TopImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 330px;
  height: 200px;
  background-image: url(${require('./ewan-robertson-208059.jpg')});
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.7);
    z-index: 0;
  }
`

const TopImageTitle = styled.h3`
  color: white;
  margin: 0;
`

const TopContent = styled.div`
  padding: 30px;
  z-index: 1;
  position: relative;
  height: 200px;
  box-sizing: border-box;
`

const Triangle = styled.div`
  border-top: 60px solid transparent;
  border-right: 330px solid white;
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 330px;
  box-sizing: border-box;
`

const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  background-color: #e6e6e6;
  padding: 20px;
  border: none;
  margin-right: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  color: black;
  text-align: center;
`

const Content = styled.div`
  background-color: white;
  padding: 30px;
  height: 200px;
  box-sizing: border-box;
`

const StyledButton = styled(Button)`
  height: 50px; 
  line-height: 40px;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
`

export default props => <SubscribeBox {...props}>
  <Top>
    <TopImage />
    <TopContent>
      <TopImageTitle>Get the weekly digest</TopImageTitle>
      <p>
        Stay up to date on the latest 
        <br />stories, tips and freebies:
      </p>
      <Triangle />
    </TopContent>
    <Content>
      <StyledInput placeholder="Enter the email address here" />
      <StyledButton>
        Subscribe
      </StyledButton>
    </Content>
  </Top>
</SubscribeBox>