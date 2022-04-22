import styled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import styles from './Footer.module.sass'
import { ReactComponent as GithubLogo } from '../../assets/images/github-logo.svg'
import Link from 'next/link'
import Input from '../UI/Input'
import TextButton from '../UI/TextButton'

const Footer: FC = () => {
  const WhiteTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
  }))
  // const ResourceLinks = styled(SideTypography)(({ theme }) => ({
  //   textDecoration: 'underline',
  // }))
  return (
    <div className={styles.footer}>
      <Container maxWidth='desktop'>
        <Grid container xs={12} justifyContent='space-between'>
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

          <Grid item xs={2}>
            <WhiteTypography variant='h5'>Resources</WhiteTypography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
