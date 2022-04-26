import styled from '@emotion/styled'
import { Container } from '@mui/material'

const MainContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1550px',
  width: '100%',
  [theme.breakpoints.down('tablet')]: {
    maxWidth: '624px',
    width: '100%',
    padding: '0 60px',
  },
}))

export default MainContainer
