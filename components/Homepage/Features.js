import styled from 'styled-components'
import React from 'react'
import Box from '../Box'


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
    <Feature background="/static/Upload-toCloud.svg">
      <Icon alt="Deploy" src="/static/Upload-toCloud.svg" />
      <Title>Deploy</Title>
      <p>
        Deploy to all environments on every push to version control. Pick your preferred way of deploying new code. At the CLI, via our API or through a Webook for your favourite VCS such as Github.
      </p>
    </Feature>
    <Feature background="/static/BusinessManWoman.svg">
      <Icon alt="SEO" src="/static/BusinessManWoman.svg" />
      <Title>Test</Title>
      <p>
        Test any version in any environment (even production!). After deployment you get a URL specific for that version and environment. This allows you to test in production without distrupting your users.
      </p>
    </Feature>
    <Feature background="/static/DataCloud.svg" >
      <Icon alt="Reliable" src="/static/DataCloud.svg" />
      <Title>Release</Title>
      <p>
        Release to your customers without any downtime guaranteed. Linc allows you to instantly switch between versions. So if you do have problems, switching back to the previous version takes seconds.
      </p>
    </Feature>
  </FeatureList>
</Box>
