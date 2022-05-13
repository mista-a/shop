import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Badge,
  useMediaQuery,
  BadgeProps,
  Drawer,
  Box,
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.sass'
import { ReactComponent as MenuIcon } from '../../assets/images/menu-icon.svg'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'
import { ReactComponent as CartIcon } from '../../assets/images/cart-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg'
import { ReactComponent as UserIcon } from '../../assets/images/user-icon.svg'
import Input from '../UI/Input'
import styled from '@emotion/styled'
import Link from '../UI/Link/Link'
import MainContainer from '../MainContainer/MainContainer'
import { Theme, useTheme } from '@mui/material'
import AuthDialog from '../AuthDialog/AuthDialog'
import { useAppSelector } from '../../redux/hooks'
import { useAppDispatch } from '../../redux/hooks'
import { setUserData, selectUserData } from '../../redux/slices/user'
import { destroyCookie } from 'nookies'

const Header = () => {
  const theme: Theme = useTheme()

  const HeaderButton = styled(Button)(({ theme: Theme }) => ({
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
  const CartBadge = styled(Badge)<BadgeProps>(({ theme: Theme }) => ({
    '& .MuiBadge-badge': {
      right: 3,
      top: 5,
      minWidth: '29px',
      minHeight: '29px',
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
  const CartButton = styled(HeaderButton)(({ theme: Theme }) => ({
    padding: '0 15px',
    columnGap: '5px',
    [theme.breakpoints.down('mobile')]: {
      padding: '0 0',
    },
  }))
  const Logo = styled(Typography)(({ theme: Theme }) => ({
    [theme.breakpoints.down('mobile')]: {
      fontSize: '30px',
    },
  }))
  const LeftSide = styled('div')(({ theme: Theme }) => ({
    display: 'flex',
    columnGap: '30px',
    alignItems: 'center',
    [theme.breakpoints.down(680)]: {
      display: 'flex',
      columnGap: '10px',
    },
  }))
  const RightSide = styled('div')(({ theme: Theme }) => ({
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

  const menuBreakepoint = useMediaQuery(theme.breakpoints.down('tablet'))
  const accountControllerBreakepoint = useMediaQuery(
    theme.breakpoints.down('tablet'),
  )
  const logoBreakepoint = useMediaQuery(theme.breakpoints.down(585))
  const cartPriceBreakepoint = useMediaQuery(theme.breakpoints.down(490))
  const searchBreakepoint = useMediaQuery(theme.breakpoints.down(720))

  const [authDialog, setAuthDialog] = useState(false)
  const [showFullSearch, setshowFullSearch] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [dialogMenu, setDialogMenu] = useState(false)
  const [query, setQuery] = useState('')

  const userData = useAppSelector(selectUserData)

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

  const dispatch = useAppDispatch()

  const logout = () => {
    dispatch(setUserData(null))
    try {
      destroyCookie(null, 'authToken')
    } catch (err) {
      console.warn('Logout error', err)
    }
  }

  useEffect(() => {
    if (authDialog && userData) {
      setAuthDialog(false)
    }
  }, [authDialog, userData])

  return (
    <AppBar position='sticky' className={styles.header}>
      <Toolbar>
        <MainContainer className={styles.container}>
          {showFullSearch && searchBreakepoint ? (
            <Input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
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
                  <Link
                    href={`/search?name=${query}`}
                    classLink={styles.link}
                  />
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
              <div className={styles.rightSide}>
                {!searchBreakepoint && (
                  <Input
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    className={styles.search}
                    placeholder='Search'
                    endAdornment={
                      <Button disableRipple className={styles.searchButton}>
                        <Link
                          href={`/search?name=${query}`}
                          classLink={styles.link}
                        />
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
                {userData ? (
                  <Button variant='outlined' onClick={logout}>
                    Logout
                  </Button>
                ) : accountControllerBreakepoint ? (
                  <HeaderButton>
                    <UserIcon />
                  </HeaderButton>
                ) : (
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
              </div>
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
