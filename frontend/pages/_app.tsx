import { theme } from '../theme'
import '../global.sass'
import MainLayout from '../layouts/MainLayout'
import { wrapper } from '../redux/store'
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
        // const userData = await Api(ctx).user.getMe()
        // store.dispatch(setUserData(userData))
      } catch (err) {
        if (ctx.asPath === '/admin') {
          ctx.res.writeHead(302, {
            Location: '/403',
          })
          ctx.res.end()
        }
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
