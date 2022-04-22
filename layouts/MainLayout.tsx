import { Container } from '@mui/material'
import React, { FC } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth='desktop'>
        <Navigation />
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default MainLayout
