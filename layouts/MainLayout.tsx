import { Container } from '@mui/material'
import React, { FC } from 'react'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Navigation />
      </Container>
      <Container maxWidth='desktop'>{children}</Container>
    </>
  )
}

export default MainLayout
