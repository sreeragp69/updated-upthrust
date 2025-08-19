import React from 'react'
import LandingPage from '../../components/Landing/LandingPage'
import AboutSection from '../../components/AboutSection/AboutSection'
import { FeatureHighlights } from '../../components/FeatureHighlights/FeatureHighlights'
import CourseSection from '../../components/CourseSection/CourseSection'
import WhyUs from '../../components/WhyUs/WhyUs'
import LearnLatest from '../../components/LearnLatest/LearnLatest'
import UpthrustAchievement from '../../components/UpthrustAchievement/UpthrustAchievement'

const Home = () => {
  return (
    <>
      <LandingPage/>
      <AboutSection/>
      <FeatureHighlights/>
      <CourseSection/>
      <WhyUs/>
      <LearnLatest/>
      <UpthrustAchievement/>
    </>
  )
}

export default Home