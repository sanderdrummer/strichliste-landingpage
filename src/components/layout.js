/** @jsx jsx */
import {
  ThemeProvider,
  light,
  dark,
  Block,
  Global,
  css,
  jsx,
  resetCss,
} from 'bricks-of-sand'
import { Header } from './header'

const Layout = ({ children }) => (
  <ThemeProvider themes={{ light, dark }}>
    <Global styles={css(resetCss)} />
    <Global
      styles={css`
        html {
          font-size: 18px;
          font-family: sans-serif;
        }
        label {
          display: block;
        }
        @media only screen and (min-width: 30em) {
          html {
            font-size: 24px;
          }
        }
        h1,
        h2,
        h3 {
          text-transform: uppercase;
          font-weight: lighter;
        }
      `}
    />
    <Header />
    <div>{children}</div>
  </ThemeProvider>
)
export default Layout
