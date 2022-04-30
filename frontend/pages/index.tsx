import { Container, Typography } from '@mui/material'
import React from 'react'
import carouselImg from '../assets/images/carousel-img.png'
import styles from './HomePage.module.sass'
import Carousel from '../components/Carousel/Carousel'
import CarouselItem from '../components/CarouselItem/CarouselItem'
import ProductList from '../components/ProductList/ProductList'

const HomePage = () => {
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
      <ProductList />
    </>
  )
}

export default HomePage