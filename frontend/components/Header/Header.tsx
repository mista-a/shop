import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Badge,
  useMediaQuery,
  BadgeProps,
  Drawer,
} from '@mui/material'
import React, { useState } from 'react'
import styles from './Header.module.sass'
import { ReactComponent as MenuIcon } from '../../assets/images/menu-icon.svg'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'
import { ReactComponent as CartIcon } from '../../assets/images/cart-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg'
import { ReactComponent as UserIcon } from '../../assets/images/user-icon.svg'
import Input from '../UI/Input'
import { Box, flexbox } from '@mui/system'
import styled from '@emotion/styled'
import Link from '../UI/Link/Link'
import MainContainer from '../MainContainer/MainContainer'
import { Theme, useTheme } from '@emotion/react'
import AuthDialog from '../AuthDialog/AuthDialog'

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
    [theme.breakpoints.down('mobile')]: {
      minHeight: '40px',
      minWidth: '40px',
      backgroundColor: 'inherit',
    },
  }))
  const CartBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 3,
      top: 5,
      minWidth: '25px',
      minHeight: '25px',
      borderRadius: '25px',
      [theme.breakpoints.down(435)]: {
        right: 5,
        top: 5,
      },
      [theme.breakpoints.down('mobile')]: {
        right: 15,
        top: 13,
        display: 'none',
      },
    },
  }))
  const CartButton = styled(HeaderButton)(({ theme }) => ({
    padding: '0 15px',
    columnGap: '5px',
    [theme.breakpoints.down('mobile')]: {
      padding: '0 0',
    },
  }))
  const Logo = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('mobile')]: {
      fontSize: '30px',
    },
  }))
  const LeftSide = styled('div')(({ theme }) => ({
    display: 'flex',
    columnGap: '30px',
    alignItems: 'center',
    [theme.breakpoints.down(680)]: {
      display: 'flex',
      columnGap: '10px',
    },
  }))
  const RightSide = styled('div')(({ theme }) => ({
    display: 'flex',
    columnGap: '30px',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    [theme.breakpoints.down(680)]: {
      columnGap: '10px',
    },
  }))
  const Menu = styled(Drawer)(({ theme }) => ({}))
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
  }

  const theme: Theme = useTheme()
  const menuBreakepoint = useMediaQuery(theme.breakpoints.down('tablet'))
  const accountControllerBreakepoint = useMediaQuery(
    theme.breakpoints.down('tablet')
  )
  const logoBreakepoint = useMediaQuery(theme.breakpoints.down(585))
  const cartPriceBreakepoint = useMediaQuery(theme.breakpoints.down(490))
  const searchBreakepoint = useMediaQuery(theme.breakpoints.down(720))

  const [authDialog, setAuthDialog] = useState(false)
  const [showFullSearch, setshowFullSearch] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [dialogMenu, setDialogMenu] = useState(false)

  const openSignInAuthDialog = () => {
    setAuthDialog(true)
    setDialogMenu(false)
  }
  const openSignUpAuthDialog = () => {
    setAuthDialog(true)
    setDialogMenu(true)
  }
  const closeAuthDialog = () => setAuthDialog(false)

  const switchShowFullSearch = () => {
    setshowFullSearch(!showFullSearch)
  }

  const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <AppBar position='sticky' className={styles.header}>
      <Toolbar>
        <MainContainer className={styles.container}>
          {showFullSearch && searchBreakepoint ? (
            <Input
              className={styles.search}
              placeholder='Search'
              startAdornment={
                <Button
                  disableRipple
                  className={styles.searchButton}
                  onClick={switchShowFullSearch}
                >
                  x
                </Button>
              }
              endAdornment={
                <Button disableRipple className={styles.searchButton}>
                  <SearchIcon />
                </Button>
              }
            />
          ) : (
            <>
              <Drawer
                anchor='left'
                open={openMenu}
                onClose={() => setOpenMenu(false)}
              >
                <Box width='250px' role='presentation'>
                  setOpenMenu(false)
                </Box>
              </Drawer>
              <LeftSide>
                {menuBreakepoint && (
                  <>
                    <HeaderButton onClick={() => setOpenMenu(true)}>
                      <MenuIcon />
                    </HeaderButton>
                  </>
                )}
                {logoBreakepoint ? (
                  <Link href={'/'}>
                    <Logo variant='h4'>S</Logo>
                  </Link>
                ) : (
                  <Link href={'/'}>
                    <Logo variant='h4'>SHOP</Logo>
                  </Link>
                )}
              </LeftSide>
              <RightSide>
                {!searchBreakepoint && (
                  <Input
                    className={styles.search}
                    placeholder='Search'
                    endAdornment={
                      <Button disableRipple className={styles.searchButton}>
                        <SearchIcon />
                      </Button>
                    }
                  />
                )}
                {!showFullSearch && searchBreakepoint && (
                  <HeaderButton onClick={switchShowFullSearch}>
                    <SearchIcon />
                  </HeaderButton>
                )}
                {!accountControllerBreakepoint && (
                  <Box className={styles.accountController}>
                    <Button variant='text' onClick={openSignInAuthDialog}>
                      <Typography>Log in</Typography>
                    </Button>
                    <Typography>|</Typography>
                    <Button variant='text' onClick={openSignUpAuthDialog}>
                      <Typography>Create account</Typography>
                    </Button>
                  </Box>
                )}
                {accountControllerBreakepoint && (
                  <HeaderButton>
                    <UserIcon />
                  </HeaderButton>
                )}
                <HeaderButton className={styles.likeButton}>
                  <LikeIcon />
                </HeaderButton>
                <Link href={'/cart'}>
                  <CartBadge badgeContent={10} color='info'>
                    <CartButton
                      variant='contained'
                      className={styles.cartButton}
                    >
                      <CartIcon />
                      {!cartPriceBreakepoint && <Typography>15.33$</Typography>}
                    </CartButton>
                  </CartBadge>
                </Link>
              </RightSide>
              <AuthDialog
                onClose={closeAuthDialog}
                open={authDialog}
                buttonChecked={dialogMenu}
                toggleButton={() => setDialogMenu(!dialogMenu)}
              />
            </>
          )}
        </MainContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Header
