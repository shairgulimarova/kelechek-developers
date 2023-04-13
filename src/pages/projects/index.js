
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {article} from '../../components/layout.module.scss'
import {page} from '../../components/layout.module.scss'
import {complDate} from '../../components/layout.module.scss'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects we have complteted are listed below">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id} className={article}>
            <h2 >
              <Link to={`/projects/${node.frontmatter.slug}`} className={page}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className={complDate}>Completion date: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Projects we have completed" />

export default BlogPage