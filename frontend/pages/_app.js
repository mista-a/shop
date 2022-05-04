import { ThemeProvider } from '@mui/system'
import { theme } from '../theme'
import '../global.sass'
import MainLayout from '../layouts/MainLayout'
import { Provider } from 'react-redux'
import { store, wrapper } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
