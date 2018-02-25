import React from 'react'
import styled from 'styled-components'
import Background from './Background'
import VideoContainer from './VideoContainer'
import Button from '../Button'

const Hero = styled.div`
  min-height: 555px;
  position: relative;
  overflow: hidden;
`

const Content = styled.div`
  z-index: 2;
  position: relative;
  color: white;
  padding: 70px;
  text-align: left;
  box-sizing: border-box;
  @media(min-width: 768px){
    width: 70%;
    display: inline-block;
    vertical-align: top;
    float: right;
  }
  @media(min-width: 992px){
    width: 50%;
  }
`

const Title = styled.h1`
  font-size: 44px;
  font-weight: 300;
  letter-spacing: -0.44px;
  line-height: 58px;
  color: white;
  margin-top: 0;
`

const VideoWrap = styled.div`
  box-sizing: border-box;
  @media(min-width: 768px){
    width: 30%;
    display: inline-block;
    vertical-align: top;
    float: left;
    padding-top: 70px;
    padding-left: 15px;
  }
  @media(min-width: 992px){
    width: 50%;
  }
`

const StyledVideo = VideoContainer.extend`
  height: 220px;
  margin-bottom: 25px;
  @media(min-width: 768px){
    width: 220px;
    height: 200px;
    display: inline-block;
    margin-right: 140px;
    margin-bottom: 120px;
    margin-top: 0;
  }
  @media(min-width: 992px) {
    width: 555px;
    height: 358px;
    margin-right: 0;
    margin-bottom: 0;

  }
`

const LeadText = styled.p`
  font-size: 19px;
  font-weight: 400;
  opacity: 0.9;
`

export default props => <Hero {...props}>
  <Background />

  <Content>
    <Title><b>Ultimate</b> control over your Progressive Web App</Title>
    <LeadText>
      We built the best hosting platform for JavaScript Front-ends so you can focus on building amazing products.
    </LeadText>
    <Button id="gtm-hero-get-started-btn" alternate href="https://github.com/bitgenics/linc-cli">Get Started</Button>
  </Content>
  <VideoWrap>
    <StyledVideo>
      <div className="wistia_embed wistia_async_a0j2rlho90 videoFoam=true autoPlay=false">&nbsp;
      </div>
    </StyledVideo>
  </VideoWrap>
</Hero>
