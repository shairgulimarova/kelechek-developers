import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout pageTitle="Our Team">
      <p>When we code, day lasts logner than century!</p>
    </Layout>
  )
}


export const Head = () => <Seo title="About Me" />

export default AboutPage