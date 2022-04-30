import { Box, Button, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import styles from './AboutProduct.module.sass'

const AboutProduct: FC = () => {
  const [activeSection, setActiveSection] = useState<'DESCRIPTION' | 'ABOUT'>(
    'DESCRIPTION',
  )

  const changeActiveSection = (section: 'DESCRIPTION' | 'ABOUT') => {
    setActiveSection(section)
  }

  return (
    <Box className={styles.about}>
      <Box className={styles.sectionsNames}>
        <Button onClick={() => changeActiveSection('DESCRIPTION')}>
          <Typography
            component='span'
            className={`${styles.sectionName} ${
              activeSection === 'DESCRIPTION' ? styles.activeSection : ''
            }`}
          >
            DESCRIPTION
          </Typography>
        </Button>
        <Button onClick={() => changeActiveSection('ABOUT')}>
          <Typography
            component='span'
            className={`${styles.sectionName} ${
              activeSection === 'ABOUT' ? styles.activeSection : ''
            }`}
          >
            ABOUT
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default AboutProduct
