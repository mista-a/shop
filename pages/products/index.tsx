import React from 'react'
import ProductList from '../../components/ProductList'
import { IProduct } from '../../types/product'

const Index = () => {
  const products: IProduct[] = [
    {
      id: 1,
      colors: [
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa9%2Ff5%2Fa9f57c39f6bef6bc2e15258d0487616144653bd0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_tanks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
        'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd5%2Fe2%2Fd5e281c119017ba3c863d54a374628ebd92fcc77.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_tanks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      ],
      name: 't-short',
      picture:
        'https://lp2.hm.com/hmgoepprod?set=source[/a9/f5/a9f57c39f6bef6bc2e15258d0487616144653bd0.jpg],origin[dam],category[men_tshirtstanks_tanks],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
      price: 25.5,
      rating: 5,
      sizes: [],
      description: '',
    },
    {
      id: 2,
      colors: ['black', 'white'],
      name: 'shirt',
      picture:
        'https://lp2.hm.com/hmgoepprod?set=source[/d0/7c/d07c80db8ad6c37a39718220340ed0087c056c94.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
      price: 1,
      rating: 5,
      sizes: [],
      description: '',
    },
    {
      id: 3,
      colors: ['black', 'grey', 'blue'],
      name: 'jeans',
      picture:
        'https://lp2.hm.com/hmgoepprod?set=source[/77/b5/77b566ce3845791ecb47a6252b6c1e16fd93ea68.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
      price: 20,
      rating: 5,
      sizes: [],
      description: '',
    },
    {
      id: 4,
      colors: ['red', 'green'],
      name: 't-short',
      picture:
        'https://lp2.hm.com/hmgoepprod?set=source[/a9/f5/a9f57c39f6bef6bc2e15258d0487616144653bd0.jpg],origin[dam],category[men_tshirtstanks_tanks],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
      price: 25.5,
      rating: 5,
      sizes: [],
      description: '',
    },
    {
      id: 5,
      colors: ['black', 'white'],
      name: 'shirt',
      picture:
        'https://lp2.hm.com/hmgoepprod?set=source[/d0/7c/d07c80db8ad6c37a39718220340ed0087c056c94.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
      price: 1,
      rating: 5,
      sizes: [],
      description: '',
    },
    {
      id: 6,
      colors: ['black', 'grey', 'blue'],
      name: 'jeans',
      picture:
        'https://lp2.hm.com/hmgoepprod?set=source[/77/b5/77b566ce3845791ecb47a6252b6c1e16fd93ea68.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
      price: 20,
      rating: 5,
      sizes: [],
      description: '',
    },
  ]
  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default Index
