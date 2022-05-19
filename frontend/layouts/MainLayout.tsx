import React, { FC } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MainContainer from '../components/MainContainer/MainContainer'
import Navigation from '../components/Navigation/Navigation'
import styles from './MainLayout.module.sass'

const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainContainer className={styles.main}>
        <Navigation />
        {children}
      </MainContainer>
      <Footer />
    </div>
  )
}

export default MainLayout
