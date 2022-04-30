import styled from '@emotion/styled'
import { Dialog, DialogContent, DialogContentText } from '@mui/material'
import React, { FC, useState } from 'react'
import AuthSwitcher from '../AuthSwitcher/AuthSwitcher'

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
          {buttonChecked ? <div>Когут лошара reg</div> : <div>login</div>}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
