import { ThemeProvider } from '@mui/system'
import { theme } from '../theme'
import '../global.sass'
import { Container } from '@mui/material'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
