import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Badge,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import styles from './Header.module.sass'
import { ReactComponent as MenuIcon } from '../../assets/images/menu-icon.svg'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'
import { ReactComponent as CartIcon } from '../../assets/images/cart-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg'
import { ReactComponent as UserIcon } from '../../assets/images/user-icon.svg'
import Input from '../UI/Input'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import Link from '../UI/Link/Link'
import MainContainer from '../MainContainer/MainContainer'
import { useTheme } from '@emotion/react'

const Header = () => {
  const HeaderButton = styled(Button)(({ theme }) => ({
    minHeight: '50px',
    minWidth: '50px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
    boxShadow: 'none',
    borderRadius: '15px',
  }))

  const theme = useTheme()
  const menuBreakepoint = useMediaQuery(theme.breakpoints.down('tablet'))

  return (
    <AppBar position='sticky' className={styles.header}>
      <Toolbar>
        <MainContainer className={styles.container}>
          {/* <Container className={styles.container} maxWidth='desktop'> */}
          <Link href={'/'}>
            <Typography className={styles.logo} variant='h4'>
              SHOP
            </Typography>
          </Link>
          {menuBreakepoint && (
            <HeaderButton>
              <MenuIcon />
            </HeaderButton>
          )}
          <Input
            className={styles.search}
            placeholder='Search'
            endAdornment={
              <Button disableRipple className={styles.searchButton}>
                <SearchIcon />
              </Button>
            }
          />
          <Box
            className={styles.accountController}
            sx={{
              display: { desktop: 'flex', tablet: 'none', mobile: 'none' },
            }}
          >
            <Button variant='text'>
              <Typography>Log in</Typography>
            </Button>
            <Typography>|</Typography>
            <Button>Create account</Button>
          </Box>
          <HeaderButton
            className={styles.likeButton}
            sx={{
              display: { desktop: 'none', tablet: 'flex', mobile: 'flex' },
            }}
          >
            <UserIcon />
          </HeaderButton>
          <HeaderButton className={styles.likeButton}>
            <LikeIcon />
          </HeaderButton>
          <Link href={'/cart'}>
            <Badge badgeContent={10} color='info'>
              <HeaderButton
                variant='contained'
                startIcon={<CartIcon />}
                className={styles.cartButton}
              >
                <Typography className={styles.cartText}>15.33$</Typography>
              </HeaderButton>
            </Badge>
          </Link>
          {/* </Container> */}
        </MainContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Header
