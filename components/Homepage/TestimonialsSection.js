import React, { Component } from 'react'
import styled from 'styled-components'
import Testimonial from './Testimonial'
import Carousel from 'components/Carousel'
import Row from 'components/Row'

const Wrapper = styled.div`
  padding: 52px 0;
`

class TestimonialsSection extends Component {
  render = () => {
    return <Wrapper><Row>
      <Carousel
        items={[
          <Testimonial 
            quote={`“My favourite feature of Linc is the version-specific URL. It allows us to 
              push a new feature to production and test it there, while regular users 
              still see the stable version. It radically reduces the risk of deploying.”`}
            image="/static/maxbush.jpg"
            name="Max Bush"
            title="Co-founder — Fysho"
          />,
          <Testimonial 
            quote={`“SEO and social are invaluable in delivering on our mission 
              for greater visibility of local businesses. Without Linc, we would 
              have picked PHP or Ruby, but now we can go all in with React and 
              really delight our customers.”`}
            image="/static/theowilliams.jpg"
            name="Theo Williams"
            title="Co-founder — Localised"
          />
        ]}
      />
    </Row></Wrapper>
  }
}

export default TestimonialsSection