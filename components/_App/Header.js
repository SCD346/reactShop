import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  const user = true;

  function isActive(route) {
    return route === router.pathname
  }

  return (
    <Menu fluid={true} id="menu" inverted>
      <Container text>

        {/* HEADER ITEM 1: ReactShop */}
        <Link href='/'>
          <Menu.Item header active={isActive('/')}>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: '1em' }}
            />
            ReactShop
          </Menu.Item>
        </Link>

        {/* HEADER ITEM 2: Cart */}
        <Link href='/cart'>
          <Menu.Item header active={isActive('/cart')}>
            <Icon
              name="cart"
              size="large"
            />
            Cart
          </Menu.Item>
        </Link>

        {/* HEADER ITEM 3: Create */}
        {user && <Link href='/create'>
          <Menu.Item header active={isActive('/create')}>
            <Icon
              name="add square"
              size="large"
            />
            Create
          </Menu.Item>
        </Link>}

        {user ? (
          <>
          {/* HEADER ITEM 4: Account */}
          <Link href='/account'>
            <Menu.Item header active={isActive('/account')}>
              <Icon
                name="user"
                size="large"
              />
              Account
            </Menu.Item>
          </Link>

        {/* HEADER ITEM 5: Logout */}
          <Menu.Item header>
            <Icon
              name="sign out"
              size="large"
            />
            Logout
          </Menu.Item>
      </>)
      :
      (<>
        {/* HEADER ITEM 6: Login */}
        <Link href='/login'>
          <Menu.Item header active={isActive('/login')}>
              <Icon
                name="sign in"
                size="large"
              />
              Login
            </Menu.Item>
        </Link>

        {/* HEADER ITEM 7: Signup */}
        <Link href='/signup'>
          <Menu.Item header active={isActive('/signup')}>
              <Icon
                name="signup"
                size="large"
              />
              Signup
            </Menu.Item>
        </Link>
      </>)}

      </Container>
    </Menu>
  )
}

export default Header;
