import { theme } from '../theme'
import '../global.sass'
import MainLayout from '../layouts/MainLayout'
import { Provider } from 'react-redux'
import { store, wrapper } from '../redux/store'
import { AppProps } from 'next/app'
import { parseCookies } from 'nookies'
import { UserApi } from '../API/API'
import { setUserData } from '../redux/slices/user'
import { ThemeProvider } from '@mui/material/styles'
import { Api } from '../API'

function ShopApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

ShopApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }) => {
      try {
        const { authToken } = parseCookies(ctx)
        const userData = await Api(ctx).user.getMe()
        store.dispatch(setUserData(userData))
      } catch (err) {
        console.log(err)
      }

      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
        },
      }
    }
)

export default wrapper.withRedux(ShopApp)
