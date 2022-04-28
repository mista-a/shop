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

const ProductPage = () => {
  const product = {
    name: 'Short Dress',
    price: 17.99,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['red', 'purple', 'grey', 'yellow'],
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
          <FormControl fullWidth>
            <InputLabel id='sizeLabel'>Select size</InputLabel>
            <Select labelId='sizeLabel' id='sizeSelect' label='Select size'>
              {product.sizes.map((size) => {
                return <MenuItem value={size}>{size}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Box>
        <Box>
          {product.colors.map((color) => (
            <Button
              className={`${styles.color} ${
                activeColor === color ? styles.activeColor : ''
              }`}
              sx={{
                backgroundColor: `${color}`,
                opacity: '50%',
                '&.MuiButtonBase-root:hover': {
                  backgroundColor: `${color}`,
                  opacity: '50%',
                },
              }}
              onClick={() => setActiveColor(color)}
            ></Button>
          ))}
        </Box>
      </div>
    </div>
  )
}

export default ProductPage
