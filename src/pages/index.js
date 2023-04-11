import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

import {learnMore, titleDescription, container_inner} from '../components/layout.module.scss'

const IndexPage = () => {
  return (
    
      <Layout pageTitle="STEP FORWARD WITH KELECHEK DEVELOPERS">
      <p className={titleDescription}>This is the best place to find well trained junior developers in Kyrgyzstan! Click below to find out more about us.</p>
      <div className={container_inner}>
      <Link to='/about' className={learnMore}>Learn more</Link>
      </div>
      
    </Layout>
    
  
    
  )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage