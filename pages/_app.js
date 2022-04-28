import { ThemeProvider } from '@mui/system'
import { theme } from '../theme'
import '../global.sass'
import { Container } from '@mui/material'
import MainLayout from '../layouts/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp
