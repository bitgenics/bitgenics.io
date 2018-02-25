import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import Hero from 'components/Homepage/Hero'
import AboutSection from 'components/Homepage/AboutSection'
import FeaturesSection from 'components/Homepage/FeaturesSection'
import BookSection from 'components/Homepage/BookSection'
import TestimonialsSection from 'components/Homepage/TestimonialsSection'
import PricingSection from 'components/Homepage/PricingSection'

export default () => (
  <Page headTitle="Linc - a front-end delivery platform for progressive web apps">
    <Hero />
    <AboutSection />
    <FeaturesSection />
    <BookSection />
    <TestimonialsSection />
    <PricingSection />
    <BookSection />
  </Page>
)
