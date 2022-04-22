import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { IProduct } from '../../types/product'
import styles from '../../styles/ProductPage.module.sass'
import { useRouter } from 'next/router'
import { cartAPI } from '../../API/API'

const ProductPage = () => {
  const product: IProduct = {
    id: 1,
    colors: [
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa9%2Ff5%2Fa9f57c39f6bef6bc2e15258d0487616144653bd0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_tanks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd5%2Fe2%2Fd5e281c119017ba3c863d54a374628ebd92fcc77.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_tanks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
    name: 't-short',
    picture:
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe8%2Fb5%2Fe8b5b73231afee2547a5821eddce7a943c6dd99d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_tanks%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    price: 25.5,
    rating: 5,
    sizes: [38, 39, 40, 41, 42],
    description: '',
  }

  const [activeColor, setActiveColor] = useState(product.colors[0])
  const [size, setSize] = useState('40')

  const router = useRouter()
  const productId = +router.query.id
  const userId = 1

  const addToCart = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`)

    const data = await response.json()

    const checkDidProductInCart = (cartList: IProduct[], productId: number) => {
      for (const product of cartList) {
        if (product.id === productId) {
          return false
        }
      }
      return true
    }

    if (checkDidProductInCart(data.cart, productId)) {
      data.cart.push(product)
      cartAPI.patchCart(data.cart, userId)
    }
  }

  const chooseColor = (color) => {
    setActiveColor(color)
  }

  const chooseSize = (event: SelectChangeEvent) => {
    setSize(event.target.value as string)
  }

  return (
    <MainLayout>
      <Container>
        <Grid container direction='row' justifyContent='center' spacing={2}>
          <Grid item>
            <img
              className={styles.productImg}
              src={product.picture}
              alt={product.name}
            />
          </Grid>
          <Grid
            className={styles.description}
            item
            container
            direction='column'
            spacing={2}
          >
            <Grid item>
              {/* <Paper className={styles.productPaper}> */}
              <Typography variant='h3'>{product.name}</Typography>
              <Typography variant='h4'>{`$${product.price}`}</Typography>
              {product.colors.map((color, index) => (
                <Button
                  key={index}
                  className={activeColor === color ? styles.active : ''}
                  onClick={() => chooseColor(color)}
                >
                  <img src={color} alt='' />
                </Button>
              ))}
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel id='size-label'>Size</InputLabel>
                <Select
                  labelId='size-label'
                  id='size-select'
                  value={size}
                  label='Age'
                  onChange={chooseSize}
                >
                  {product.sizes.map((size, index) => (
                    <MenuItem key={index} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* </Paper> */}
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={addToCart}>
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default ProductPage
