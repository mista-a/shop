import axios, { AxiosInstance } from 'axios'
import { CreateUserDto, LoginDto, ResponseUser } from './types'

const instance = axios.create({ baseURL: 'http://localhost:3001/' })

export const UserApi = (instance?: AxiosInstance) => ({
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
  async getProducts(query = '') {
    const { data } = await instance.get(`/products${query}`)
    return data.products
  },
  async getProductsById(id) {
    const { data } = await instance.get(`/products/${id}`)
    return data
  },
  async getPopularProducts() {
    const { data } = await instance.get('/products/popular')
    return data
  },
  async getFavorite() {
    const { data } = await instance.get('/products/popular')
    return data
  },
})
