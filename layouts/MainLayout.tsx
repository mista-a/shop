import { Container } from '@mui/material'
import React, { FC } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MainContainer from '../components/MainContainer/MainContainer'
import Navigation from '../components/Navigation/Navigation'

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Navigation />
        {children}
      </MainContainer>
      <Footer />
    </>
  )
}

export default MainLayout
