import { theme } from '../theme'
import '../global.sass'
import MainLayout from '../layouts/MainLayout'
import { Provider } from 'react-redux'
import { store, wrapper } from '../redux/store'
import { AppProps } from 'next/app'
import { parseCookies } from 'nookies'
import { UserApi } from '../API/API'
import { setUserData } from '../redux/slices/user'
import { ThemeProvider } from '@mui/material'

function ShopApp({ Component, pageProps }: AppProps) {
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
        const userData = await UserApi.getMe(authToken)
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
    },
)

export default wrapper.withRedux(ShopApp)
