import { AxiosInstance } from 'axios'
import { CreateUserDto, LoginDto, ResponseUser } from './types'

export const ProductApi = (instance: AxiosInstance) => ({
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
})
