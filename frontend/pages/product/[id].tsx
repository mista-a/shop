import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './ProductPage.module.sass'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'
import { Box } from '@mui/material'
import Counter from '../../components/Counter/Counter'
import TextButton from '../../components/UI/TextButton'
import AboutProduct from '../../components/AboutProduct/AboutProduct'
import { useRouter } from 'next/router'
import { Api } from '../../API'

// NextFunctionComponent

const ProductPage = ({ product }) => {
  const [activeShowcaseItem, setActiveShowcaseItem] = useState(
    product.showcase[0].miniImg
  )

  return (
    <div className={styles.productPage}>
      {product.showcase.map((showcaseItem) => {
        return (
          showcaseItem.miniImg === activeShowcaseItem && (
            <>
              <img
                src={showcaseItem.imgs[0]}
                alt={product.name}
                className={styles.mainProductImg}
              />
              <img
                src={showcaseItem.imgs[2]}
                alt={product.name}
                className={styles.mainProductImg}
              />
            </>
          )
        )
      })}
      <div className={styles.options}>
        <div className={styles.optionsHeader}>
          <Typography>{product.name}</Typography>
          <LikeIcon />
        </div>
        <Typography>$ {product.price}</Typography>
        <Box>
          {/* <FormControl sx={{ width: 235 }}>
            <InputLabel id='sizeLabel'>Select size</InputLabel>
            <Select labelId='sizeLabel' id='sizeSelect' label='Select size'>
              {product.sizes.map((size) => {
                return <MenuItem value={size}>{size}</MenuItem>
              })}
            </Select>
          </FormControl> */}
        </Box>
        <Box>
          {product.showcase.map((showcaseItem) => (
            <Button
              variant='text'
              className={`showcaseItem ${
                activeShowcaseItem === showcaseItem.miniImg &&
                styles.activeShowcaseItem
              }`}
              onClick={() => setActiveShowcaseItem(showcaseItem.miniImg)}
            >
              <img src={showcaseItem.miniImg} />
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

export const getServerSideProps = async (ctx) => {
  try {
    const id = ctx.params.id
    const product = await Api().product.getById(id)
    return { props: { product } }
  } catch (err) {
    console.log(err)
  }
  return { props: { product: null } }
}

export default ProductPage
