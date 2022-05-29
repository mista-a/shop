import { AxiosInstance } from 'axios'
import {
  CreateUserDto,
  LoginDto,
  ResponseCategories,
  ResponseUser,
} from './types'

// class showcaseItem {
//   miniImg: string
//   imgs: string[]
// }

type CreateProductDto = {
  name: string
  img: string
  price: string
  // colors: Array<string>
  showcase: any[]
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
  async getPopularAuth() {
    const { data } = await instance.get('/products/popular/auth')
    return data
  },
  async create(dto: CreateProductDto) {
    await instance.post<CreateProductDto>('/products', dto)
  },
  async getCategories() {
    const { data } = await instance.get<ResponseCategories>(
      '/products/categories',
    )
    return data
  },
  async getSubCategories() {
    const { data } = await instance.get('/products/subcategories')
    return data
  },
  async getBySubCategories(name: string) {
    const { data } = await instance.get(`/products/subcategories/${name}`)
    return data
  },
})
