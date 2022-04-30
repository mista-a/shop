import styled from '@emotion/styled'
import { Container } from '@mui/material'

const MainContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1550px',
  width: '100%',
  padding: '0 30px',
  [theme.breakpoints.down('tablet')]: {
    maxWidth: '1024px',
  },
  [theme.breakpoints.down('mobile')]: {
    maxWidth: '428px',
  },
}))

export default MainContainer
