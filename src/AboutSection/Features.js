import styled from 'styled-components'
import React from 'react'
import Box from './../Box'


const FeatureList = styled.ul`
  list-style: none;
  margin: 0;
  @media (max-width: 992px){
    padding-left: 0;
  }
`

const Feature = styled.li`
  display: block;
  background-repeat: no-repeat;
  background-position: 0px 0;
  @media (min-width: 1200px){
    padding-left: 100px;
    background-image: ${props => props.background ?
      `url(${props.background})` :
      'none'};
  }
`

const Title = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 6.5px;
  margin-top: 0;
`

const Icon = styled.img`
  float: left;
  margin-right: 20px;
  @media (min-width: 1200px){
    display: none;
  }
`

export default props => <Box {...props}>
  <FeatureList>
    <Feature background={require('./ClockBack.svg')}>
      <Icon alt="Fast" src={require('./ClockBack.svg')} />
      <Title>Blazingly Fast</Title>
      <p>
        Your site is hosted all around the world, close to where your users are. 
        With support for code splitting, service workers, asset fingerprinting 
        and more your site will be shown to your users as fast as possible.
      </p>
    </Feature>
    <Feature background={require('./BusinessManWoman.svg')}>
      <Icon alt="SEO" src={require('./BusinessManWoman.svg')} />
      <Title>SEO and Social Sharing</Title>
      <p>
        Our Server-Side Rendering engine renders your content to all of your 
        clients, both users and crawlers, as regular HTML. Perfect for both 
        SEO and Social Sharing.
      </p>
    </Feature>
    <Feature background={require('./DataCloud.svg')}>
      <Icon alt="Reliable" src={require('./DataCloud.svg')} />
      <Title>Reliable Managed Hosting</Title>
      <p>
        We take care of all the hosting for you and because Linc is built on top 
        of the latest managed services by AWS and runs in multiple regions and 
        availability zones, you can rest assured your site or application is in 
        great hands.
      </p>
    </Feature>
  </FeatureList>
</Box>