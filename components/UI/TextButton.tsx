import styled from '@emotion/styled'
import { Button } from '@mui/material'

const Input = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF7C23',
  '&:hover': {
    backgroundColor: '#FF7C23',
  },
  textAlign: 'center',
  color: 'white',
}))

export default Input
