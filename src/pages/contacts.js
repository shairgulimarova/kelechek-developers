
import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"

const Contacts = () => {
  return (
    <Layout pageTitle="Our Contacts">
      <p>You can find us everywhere! </p>
    </Layout>
  )
}


export const Head = () => <Seo title="About Me" />

export default Contacts