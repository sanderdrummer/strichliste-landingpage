import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { Card, ResponsiveGrid } from 'bricks-of-sand'
import HeroImage from '../components/hero-image'
import Features from '../components/features'
import Users from '../components/users'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = 'U Fam'
    const siteDescription = 'hi'
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <HeroImage />
        <ResponsiveGrid
          margin="1rem"
          gridGap="1rem"
          tabletColumns="1fr 1fr 1fr"
        >
          <Card>
            <h2>Fully responsive</h2>
            <p>
              Strichliste is using latest css features like grid and flexbox to
              provide best experience on every device.
            </p>
          </Card>
          <Card>
            <h2>React &amp; TypeScript</h2>
            <p>
              Strichliste is using latest css features like grid and flexbox to
              provide best experience on every device.
            </p>
          </Card>
          <Card>
            <h2>Open Source</h2>
            <p>
              Strichliste is using latest css features like grid and flexbox to
              provide best experience on every device.
            </p>
          </Card>
        </ResponsiveGrid>
        <Features />
        <Users />
      </Layout>
    )
  }
}
export default BlogIndex
