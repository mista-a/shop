import { UserApi } from './user'
import { NextPageContext, GetServerSidePropsContext } from 'next'
import Cookies, { parseCookies } from 'nookies'
import axios from 'axios'
import { ProductApi } from './product'

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext) => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies()
  const token = cookies.shopToken

  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return {
    user: UserApi(instance),
    product: ProductApi(instance),
  }
}
