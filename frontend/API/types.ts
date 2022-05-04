export type LoginDto = {
  email: string
  password: string
}

export type CreateUserDto = {
  name: string
} & LoginDto

export type ResponseUser = {
  id: number
  email: string
  name: string
  token: string
}
