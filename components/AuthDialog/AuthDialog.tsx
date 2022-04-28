import styled from '@emotion/styled'
import { Dialog, DialogContent, DialogContentText } from '@mui/material'
import React, { FC, useState } from 'react'
import AuthSwitcher from '../AuthSwitcher/AuthSwitcher'

interface AuthDialogProps {
  onClose: () => void
  open: boolean
}

const AuthDialog: FC<AuthDialogProps> = ({ onClose, open }) => {
  const [buttonChecked, setButtonChecked] = useState(false)

  const toggleButton = () => {
    setButtonChecked(!buttonChecked)
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          <AuthSwitcher
            buttonChecked={buttonChecked}
            toggleButton={toggleButton}
          />
          {buttonChecked ? <div>reg</div> : <div>login</div>}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
