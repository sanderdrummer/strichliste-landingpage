/** @jsx jsx */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Card, jsx } from 'bricks-of-sand'

import Layout from '../components/layout'
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <div
          css={{
            maxWidth: '1024px',
            margin: '0 auto',
            padding: '1rem 0',
            quote: {
              borderLeft: '0.25rem solid #eceeef',
              padding: '0.5rem 1rem',
              display: 'block',
            },
            pre: {
              wordBreak: 'break-word',
              wordWrap: 'break-word',
              display: 'block',
              padding: '0.5rem',
              background: 'lightgrey',
              border: 'solid 1px #000',
              borderRadius: '4px',
              margin: '1rem 0',
              fontSize: '0.8rem',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            },
            'ul, ol': {
              marginLeft: '2rem',
              marginBottom: '1rem',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            },
            ul: {
              listStyle: 'square',
            },
            'p, h1, h2, h3, quote': {
              marginBottom: '1rem',
            },
            h1: {
              fontSize: '1.7rem',
            },
            h2: {
              fontSize: '1.5rem',
            },
            h3: {
              fontSize: '1.3rem',
            },
            '@media only screen and (min-width: 30em)': {
              padding: '1rem',
            },
          }}
        >
          <Card>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Card>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
      }
    }
  }
`
