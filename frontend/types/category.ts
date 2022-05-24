export type Category = {
  id: number
  name: string
  subCategories: [{ id: number; name: string }]
}
