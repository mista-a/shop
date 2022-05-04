import { Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import styles from './AuthSwitcher.module.sass'

interface AuthSwitecherProps {
  buttonChecked: boolean
  toggleButton: () => void
}

const AuthSwitecher: FC<AuthSwitecherProps> = ({
  buttonChecked,
  toggleButton,
}) => {
  return (
    <div className={styles.switcherWrapper}>
      <label className={styles.label}>
        <div className={styles.switcher}>
          <div className={styles.switcherTextContainer}>
            <Typography className={styles.switcherText}>Sign in</Typography>
            <Typography className={styles.switcherText}>Sign up</Typography>
          </div>
          <div
            className={`${styles.button} ${
              buttonChecked ? styles.buttonChecked : ''
            }`}
          ></div>
          <input
            className={styles.input}
            type='checkbox'
            onChange={toggleButton}
            checked={buttonChecked}
          />
        </div>
      </label>
    </div>
  )
}

export default AuthSwitecher
