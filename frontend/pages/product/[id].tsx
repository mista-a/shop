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

const ProductPage = () => {
  const [product, setProduct] = useState({
    colors: [],
    name: '',
    price: null,
    sizes: [],
    showcase: [],
  })

  const [activeShowcaseItem, setActiveShowcaseItem] = useState('')

  const router = useRouter()

  const { id } = router.query

  useEffect(() => {
    ;(async () => {
      const product = await UserApi.getProductsById(id)
      setProduct(product)
      setActiveShowcaseItem(product.showcase[0])
    })()
  }, [])

  console.log(product.showcase[0])

  return (
    <div className={styles.productPage}>
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
        {/* <Box> */}
        {/* <FormControl sx={{ width: 235 }}> */}
        {/* <InputLabel id='sizeLabel'>Select size</InputLabel> */}
        {/* <Select labelId='sizeLabel' id='sizeSelect' label='Select size'>
              {product.sizes.map((size) => {
                return <MenuItem value={size}>{size}</MenuItem>
              })}
            </Select> */}
        {/* </FormControl> */}
        {/* </Box> */}
        <Box>
          {product.showcase.map((showcaseItem) => (
            <Button
              variant='text'
              className={`${styles.showcaseItem} ${
                activeShowcaseItem === showcaseItem && styles.activeShowcaseItem
              }`}
              onClick={() => setActiveShowcaseItem(showcaseItem)}
            >
              <img src={showcaseItem} />
            </Button>
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
