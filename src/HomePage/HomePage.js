import React from 'react'
import styled from 'styled-components'
import Header from './../Header'
import Hero from './../Hero'
import AboutSection from './../AboutSection'
import FeaturesSection from './../FeaturesSection'
import BookSection from './../BookSection'
import TestimonialsSection from './../TestimonialsSection'
import PricingSection from './../PricingSection'
import ContactSection from './../ContactSection'
import FooterSection from './../FooterSection'

const HomePage = styled.div`

`

export default props => <HomePage {...props}>
  <Header />
  <Hero />
  <AboutSection />
  <FeaturesSection />
  <BookSection />
  <TestimonialsSection />
  <PricingSection />
  <BookSection />
  <ContactSection />
  <FooterSection />
</HomePage>