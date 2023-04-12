import * as React from 'react'
import {graphql} from 'gatsby'; 
import Layout from '../components/layout'
import Seo from '../components/seo'
import { article } from '../components/layout.module.scss'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="Projects we have implemented">
      
      {
        data.allMdx.nodes.map((node) => (
          <article  className={article} key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Completed: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
       
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        date
      }
      id
      excerpt
    }
  }
}

`

export const Head = () => <Seo title="Projects we have implemented" />

export default BlogPage