/** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Card, jsx } from 'bricks-of-sand'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div
          css={{
            padding: '1rem 0',
            margin: '0 auto',
            maxWidth: '700px',
            h3: {
              marginBottom: '1rem',
            },
          }}
        >
          <h2>News</h2>

          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <Link to={node.fields.slug}>
                <Card hover="level3" margin="2rem 0" key={node.fields.slug}>
                  <h3>{title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Card>
              </Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
