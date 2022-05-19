import { AxiosInstance } from 'axios'
import { CreateUserDto, LoginDto, ResponseUser } from './types'

export const UserApi = (instance: AxiosInstance) => ({
  async register(dto: CreateUserDto) {
    const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
      '/auth/register',
      dto,
    )
    return data
  },
  async login(dto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: ResponseUser }>(
      '/auth/login',
      dto,
    )
    return data
  },
  async getMe() {
    const { data } = await instance.get<ResponseUser>('/users/me')
    return data
  },
  async getCart() {
    const { data } = await instance.get(`/users/cart`)
    return data
  },
  async addToCart(productId: number, count: number, type: string) {
    await instance.post(`/users/cart`, { productId, count, type })
  },
  async deleteFromCart(productId: number) {
    await instance.delete(`/users/cart`, { data: { productId } })
  },
})
