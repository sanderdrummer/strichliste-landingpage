/** @jsx jsx */
import { css, jsx } from 'bricks-of-sand'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => (
  <div css={{ position: 'relative' }}>
    <div
      css={{
        textShadow: '1px 1px 0',
        color: 'white',
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        marginLeft: '1.5rem',
        padding: '1rem',
        h1: {
          fontSize: '1.5rem',
          margin: 0,
        },
        p: {
          fontSize: '1rem',
          margin: 0,
        },
        '@media (min-width: 768px)': {
          h1: {
            fontSize: '2rem',
          },
          p: {
            fontSize: '1.4rem',
          },
        },
        '@media (min-width: 1024px)': {
          h1: {
            fontSize: '4rem',
          },
          p: {
            fontSize: '2rem',
          },
        },
      }}
    >
      <h1>Self-Service Checklist</h1>
      <p>Manage your kiosk in a breeze</p>
    </div>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "strichliste-blur.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
  </div>
)
export default Image
