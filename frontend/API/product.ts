import { AxiosInstance } from 'axios'
import { CreateUserDto, LoginDto, ResponseUser } from './types'

type CreateProductDto = {
  name: string
  img: string
  price: string
  // colors: Array<string>
  // showcase: any
}

export const ProductApi = (instance: AxiosInstance) => ({
  async getAll(query = '') {
    const { data } = await instance.get(`/products${query}`)
    return data.products
  },
  async getById(id) {
    const { data } = await instance.get(`/products/${id}`)
    return data
  },
  async getPopular() {
    const { data } = await instance.get('/products/popular')
    return data
  },
  async create(dto: CreateProductDto) {
    await instance.post<CreateProductDto>('/products', dto)
  },
})
