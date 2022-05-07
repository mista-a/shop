import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import carouselImg from '../assets/images/carousel-img.png'
import styles from './HomePage.module.sass'
import Carousel from '../components/Carousel/Carousel'
import CarouselItem from '../components/CarouselItem/CarouselItem'
import ProductList from '../components/ProductList/ProductList'
import { UserApi } from '../API/API'

const HomePage = () => {
  const [products, setProducts] = useState([
    { img: '', name: '', colors: [], id: null, views: null, price: null },
  ])

  const carouselData = [
    {
      carouselImg: carouselImg,
      header: 'Sprint into spring1',
      text: 'Set yourself up for wholesome goals with fresh workout gear',
    },
    {
      carouselImg: carouselImg,
      header: 'Sprint into spring2',
      text: 'Set yourself up for wholesome goals with fresh workout gear',
    },
    {
      carouselImg: carouselImg,
      header: 'Sprint into spring3',
      text: 'Set yourself up for wholesome goals with fresh workout gear',
    },
  ]

  useEffect(() => {
    const getProducts = async () => {
      const products = await UserApi.getPopularProducts()
      setProducts(products.products)
    }

    getProducts()
  }, [])

  return (
    <>
      <Carousel>
        {carouselData.map((carouselItem, index) => {
          return (
            <CarouselItem key={index}>
              <div className={styles.carouselContainer}>
                <div className={styles.imgWrapper}>
                  <img
                    draggable='false'
                    className={styles.carouselImg}
                    src={carouselItem.carouselImg.src}
                  />
                </div>
                <div className={styles.carouselText}>
                  <Typography className={styles.carouselText} variant='h4'>
                    {carouselItem.header}
                  </Typography>
                  <Typography className={styles.carouselText}>
                    {carouselItem.text}
                  </Typography>
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </Carousel>
      <Typography className={styles.categoryName} variant='h4'>
        Most popular
      </Typography>
      <ProductList products={products} />
    </>
  )
}

export default HomePage
