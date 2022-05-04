import { Dialog, DialogContent, DialogContentText } from '@mui/material'
import React, { FC, useState } from 'react'
import AuthSwitcher from '../AuthSwitcher/AuthSwitcher'
import Login from './Login/Login'
import Registration from './Registration/Registration'
import styles from './AuthDialog.module.sass'

interface AuthDialogProps {
  onClose: () => void
  open: boolean
  buttonChecked: boolean
  toggleButton: () => void
}

const AuthDialog: FC<AuthDialogProps> = ({
  onClose,
  open,
  buttonChecked,
  toggleButton,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          <AuthSwitcher
            buttonChecked={buttonChecked}
            toggleButton={toggleButton}
          />
          <div className={styles.form}>
            {buttonChecked ? <Registration /> : <Login />}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
