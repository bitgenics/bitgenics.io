import React from 'react'
import styled from 'styled-components'
import Feature from './Feature'
import FactoryIcon from './FactoryIcon'
import UnlockIcon from './UnlockIcon'
import GlobalPositionIcon from './GlobalPositionIcon'
import ServerIcon from './ServerIcon'
import AtomIcon from './AtomIcon'
import GlobeIcon from './GlobeIcon'
import UploadToCloudIcon from './UploadToCloudIcon'
import CodeWindowIcon from './CodeWindowIcon'
import Row from 'components/Row'

const Features = styled.div`
  background-color: #252525;
  color: white;
  padding: 52px 0;
`

const Spacer = styled.div`
  height: 52px;
`

export default props => <Features {...props} id="features">
  <Row>
    <Feature 
      icon={<FactoryIcon />}
      title="Testing in Production"
      text={`Our unique deployment infrastructure allows you to test a version in 
        production before releasing it to your customers.`}
    />
    <Feature 
      icon={<UnlockIcon />}
      title="No Vendor Lock-in"
      text={`The Server-Side Rendering is open source. So your investment in 
        your code is safe. You can always host it yourself.`}
    />
    <Feature 
      icon={<GlobalPositionIcon />}
      title="Location aware"
      text={`Our servers will tell you where your user is, so you can provide 
        them with an optimised experience for their location.`}
    />
    <Feature 
      icon={<ServerIcon />}
      title="Custom Rendering logic"
      text={`Have an obscure stack? Or do you want to squeeze the last bit of 
        performance out of your site? Write your own rendering logic.`}
    />
    <Spacer />
    <Feature 
      icon={<AtomIcon />}
      title="Stack Agnostic"
      text={`Don't be locked in with a fixed set of technologies to use. Let 
        us know if your stack isn't supported yet.`}
    />
    <Feature 
      icon={<GlobeIcon />}
      title="Multiple AWS Regions"
      text={`Not just good for speed, it also allows us to keep serving your 
        site even when (extremely rare) AWS outages happen.`}
    />
    <Feature 
      icon={<UploadToCloudIcon />}
      title="API & CLI access"
      text={`Configuring Linc is done using a simple-to-use CLI. Alternatively, 
        you can build your own logic and integrate with our API.`}
    />
    <Feature 
      icon={<CodeWindowIcon />}
      title="Links with favorite VCS"
      text={`When linked with services like Github or Bitbucket, Linc will build, 
        optimise and deploy your code on every push.`}
    />
  </Row>
</Features>