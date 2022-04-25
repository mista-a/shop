import styled from '@emotion/styled'
import { Container } from '@mui/material'

const MainContainer = styled(Container)(({ theme }) => ({
  width: '1550px',
  [theme.breakpoints.down('tablet')]: {
    width: '624px',
    padding: '0 60px',
  },
}))

export default MainContainer
