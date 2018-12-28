/** @jsx jsx */
import { HeaderNavBar, Flex, jsx, Menu } from 'bricks-of-sand'
import { Link } from 'gatsby'
import { Logo } from './logo'
export const Header = () => (
  <HeaderNavBar>
    <Link className="active" to="/">
      <Flex margin="0 0 0 1rem" alignContent="center" alignItems="center">
        <Logo width="1rem" height="1rem" /> Strichliste
      </Flex>
    </Link>
    <div
      css={{
        marginRight: '1rem',
        a: {
          marginLeft: '0.5rem',
        },
      }}
    >
      <Menu className="menu" breakPoint="786" label="Menu">
        <Link activeClassName="active" to="/">
          Home
        </Link>
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/install">
          Install
        </Link>
        <a activeClassName="active" target="_blank" href="">
          Demo
        </a>
        <a activeClassName="active" target="_blank" to="/about">
          Source
        </a>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
        <Link activeClassName="active" to="/news">
          News
        </Link>
      </Menu>
    </div>
  </HeaderNavBar>
)

Header.displayName = 'Header'
