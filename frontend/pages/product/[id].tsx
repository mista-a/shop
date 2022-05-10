import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import productImg1 from '../../assets/images/delete/product-img1.png'
import styles from './ProductPage.module.sass'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'
import { IProduct } from '../../types/product'
import { Box } from '@mui/material'
import Counter from '../../components/Counter/Counter'
import TextButton from '../../components/UI/TextButton'
import AboutProduct from '../../components/AboutProduct/AboutProduct'
import { UserApi } from '../../API/API'
import { useRouter } from 'next/router'

const ProductPage = ({ product }) => {
  const [products, setProducts] = useState([])
  const [activeColor, setActiveColor] = useState(product.colors[0])

  const router = useRouter()

  const { id } = router.query

  useEffect(() => {
    const getProducts = async () => {
      const products = await UserApi.getProductsById(id)
      setProducts(products)
    }
    getProducts()
  })

  return (
    <div>
      <img
        src={productImg1.src}
        alt={product.name}
        className={styles.mainProductImg}
      />
      <img
        src={productImg1.src}
        alt={product.name}
        className={styles.mainProductImg}
      />
      <div className={styles.options}>
        <div className={styles.optionsHeader}>
          <Typography>{product.name}</Typography>
          <LikeIcon />
        </div>
        <Typography>$ {product.price}</Typography>
        <Box>
          <FormControl sx={{ width: 235 }}>
            <InputLabel id='sizeLabel'>Select size</InputLabel>
            <Select labelId='sizeLabel' id='sizeSelect' label='Select size'>
              {product.sizes.map((size) => {
                return <MenuItem value={size}>{size}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Box>
        <Box className={styles.colors}>
          {product.showcase.map((showcaseItem) => (
            <div className={activeColor === color && styles.activeColor}>
              <Button
                className={styles.color}
                onClick={() => setActiveColor(color)}
              >
                <img src={showcaseItem} />
              </Button>
            </div>
          ))}
        </Box>
        <Box className={styles.addToCart}>
          <Counter />
          <TextButton className={styles.addToCartButton}>
            Add to cart
          </TextButton>
        </Box>
        <AboutProduct></AboutProduct>
      </div>
    </div>
  )
}

export default ProductPage
