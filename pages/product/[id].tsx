import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import productImg1 from '../../assets/images/delete/product-img1.png'
import styles from './ProductPage.module.sass'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'
import { IProduct } from '../../types/product'
import { Box, width } from '@mui/system'
import Counter from '../../components/Counter/Counter'
import TextButton from '../../components/UI/TextButton'

const ProductPage = () => {
  const product = {
    name: 'Short Dress',
    price: 17.99,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['red', 'purple', 'black', 'yellow'],
  }

  const [activeColor, setActiveColor] = useState(product.colors[0])

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
          {product.colors.map((color) => (
            <div className={activeColor === color && styles.activeColor}>
              <Button
                className={styles.color}
                sx={{
                  backgroundColor: `${color}`,
                  '&.MuiButtonBase-root:hover': {
                    backgroundColor: `${color}`,
                    opacity: '50%',
                  },
                }}
                onClick={() => setActiveColor(color)}
              ></Button>
            </div>
          ))}
        </Box>
        <Box className={styles.addToCart}>
          <Counter />
          <TextButton className={styles.addToCartButton}>
            Add to cart
          </TextButton>
        </Box>
      </div>
    </div>
  )
}

export default ProductPage
