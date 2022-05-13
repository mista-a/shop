import { AxiosInstance } from 'axios'
import { CreateUserDto, LoginDto, ResponseUser } from './types'

export const ProductApi = (instance: AxiosInstance) => ({
  async getProducts(query = '') {
    const { data } = await instance.get(`/products${query}`)
    return data.products
  },
  async getById(id) {
    const { data } = await instance.get(`/products/${id}`)
    return data
  },
  async getPopular() {
    const { data } = await instance.get('/products/popular')
    console.log(data)

    return data
  },
})
