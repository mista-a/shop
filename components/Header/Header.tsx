import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Badge,
  InputBase,
  Container,
} from '@mui/material'
import React from 'react'
import Link from 'next/link'
import styles from './Header.module.sass'
import { ReactComponent as MenuIcon } from '../../assets/images/menu-icon.svg'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'
import { ReactComponent as CartIcon } from '../../assets/images/cart-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg'

const Header = () => {
  return (
    <AppBar position='sticky' className={styles.header}>
      <Toolbar>
        <Container className={styles.container} maxWidth='desktop'>
          <Link href={'/'}>
            <Typography className={styles.logo} variant='h4'>
              SHOP
            </Typography>
          </Link>
          <Button className={styles.menuButton}>
            <MenuIcon />
          </Button>
          <InputBase className={styles.search} placeholder='Search' />
          <div className={styles.accountController}>
            <Typography>Log in</Typography>
            <Typography>|</Typography>
            <Typography>Create account</Typography>
          </div>
          <Button className={styles.likeButton}>
            <LikeIcon />
          </Button>
          <Link href={'/cart'}>
            <Badge badgeContent={10} color='info'>
              <Button
                className={styles.cartButton}
                variant='contained'
                startIcon={<CartIcon />}
              >
                <Typography className={styles.cartText}>15.33$</Typography>
              </Button>
            </Badge>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
