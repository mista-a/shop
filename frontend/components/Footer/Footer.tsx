import {
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React, { FC } from 'react'
import styles from './Footer.module.sass'
import { ReactComponent as GithubLogo } from '../../assets/images/github-logo.svg'
import Link from '../UI/Link/Link'
import Input from '../UI/Input'
import TextButton from '../UI/TextButton'
import MainContainer from '../MainContainer/MainContainer'
import { theme } from '../../theme'

const Footer: FC = () => {
  const WhiteTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    textDecoration: 'underline',
  }))

  const Resources = styled(Grid)(({ theme }) => ({
    display: 'flex',
    textAlign: 'right',
    alignItems: 'flex-end',
    flexDirection: 'column',
    [theme.breakpoints.down('tablet')]: {
      alignItems: 'flex-start',
    },
  }))

  const ResourcesLinks = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    alignItems: 'flex-end',
    textDecoration: 'underline',
    textDecorationColor: 'white',
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '23px',
    [theme.breakpoints.down('tablet')]: {
      alignItems: 'flex-start',
    },
  }))

  const footerBreakpoint = useMediaQuery(theme.breakpoints.down('tablet'))

  return footerBreakpoint ? (
    <div className={styles.footer}>
      <MainContainer>
        <Grid container justifyContent='space-between'>
          <Grid item xs={8} className={styles.newsletter}>
            <WhiteTypography variant='h5'>Newsletter</WhiteTypography>
            <div className={styles.newsletterText}>
              <WhiteTypography>
                Subscribe to be the first to hear about our exclusive offers and
                latest arrivals.
              </WhiteTypography>
              <div className={styles.subscribe}>
                <Input className={styles.subscribeInput} placeholder='e-mail' />
                <TextButton className={styles.subscribeButton}>Send</TextButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <WhiteTypography variant='h5'>Dev</WhiteTypography>
            <div className={styles.devLinks}>
              <div className={styles.github}>
                <GithubLogo />
                <Link href='https://github.com/mista-a/shop'>
                  <WhiteTypography>GitHub</WhiteTypography>
                </Link>
              </div>
            </div>
          </Grid>
          <Resources item xs={2}>
            <WhiteTypography variant='h5'>Resources</WhiteTypography>
            <ResourcesLinks>
              <Link
                href={'/terms-and-conditions'}
                classLink={styles.resourceLink}
              >
                <WhiteTypography className={styles.resourceLink}>
                  Terms and Conditions
                </WhiteTypography>
              </Link>
              <Link href={'/privacy-policy'} classLink={styles.resourceLink}>
                <WhiteTypography className={styles.resourcelink}>
                  Privacy Policy
                </WhiteTypography>
              </Link>
              <Link
                href={'/shipping-and-returns'}
                classLink={styles.resourceLink}
              >
                <WhiteTypography>Shipping & Returns</WhiteTypography>
              </Link>
              <Link href={'/contact-us'} classLink={styles.resourceLink}>
                <WhiteTypography className={styles.resourcelink}>
                  Contact Us
                </WhiteTypography>
              </Link>
            </ResourcesLinks>
          </Resources>
        </Grid>
      </MainContainer>
    </div>
  ) : (
    <div className={styles.footer}>
      <MainContainer>
        <Grid container justifyContent='space-between'>
          <Grid item xs={2}>
            <WhiteTypography variant='h5'>Dev</WhiteTypography>
            <div className={styles.devLinks}>
              <div className={styles.github}>
                <GithubLogo />
                <Link href='https://github.com/mista-a/shop'>
                  <WhiteTypography>GitHub</WhiteTypography>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={8} className={styles.newsletter}>
            <WhiteTypography variant='h5'>Newsletter</WhiteTypography>
            <div className={styles.newsletterText}>
              <WhiteTypography>
                Subscribe to be the first to hear about our exclusive offers and
                latest arrivals.
              </WhiteTypography>
              <div className={styles.subscribe}>
                <Input className={styles.subscribeInput} placeholder='e-mail' />
                <TextButton className={styles.subscribeButton}>Send</TextButton>
              </div>
            </div>
          </Grid>
          <Resources item xs={2}>
            <WhiteTypography variant='h5'>Resources</WhiteTypography>
            <ResourcesLinks>
              <Link
                href={'/terms-and-conditions'}
                classLink={styles.resourceLink}
              >
                <WhiteTypography>Terms and Conditions</WhiteTypography>
              </Link>
              <Link href={'/privacy-policy'} classLink={styles.resourceLink}>
                <WhiteTypography className={styles.resourcelink}>
                  Privacy Policy
                </WhiteTypography>
              </Link>
              <Link
                href={'/shipping-and-returns'}
                classLink={styles.resourceLink}
              >
                <WhiteTypography>{'Shipping & Returns'}</WhiteTypography>
              </Link>
              <Link href={'/contact-us'} classLink={styles.resourceLink}>
                <WhiteTypography>Contact Us</WhiteTypography>
              </Link>
            </ResourcesLinks>
          </Resources>
        </Grid>
      </MainContainer>
    </div>
  )
}

export default Footer
