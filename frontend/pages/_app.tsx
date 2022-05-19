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
        const categories = await Api().product.getCategories()
        const userData = await Api(ctx).user.getMe()
        store.dispatch(setUserData(userData))
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
    }
)

export const getServerSideProps = async (ctx) => {
  try {
    const products = await Api().product.getPopular()
    const categories = await Api().product.getCategories()

    return { props: { products: products.products, categories } }
  } catch (err) {
    console.log(err)
  }
  return { props: { products: null } }
}

export default wrapper.withRedux(ShopApp)
