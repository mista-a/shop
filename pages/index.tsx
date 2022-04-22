import { Container, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../layouts/MainLayout'
import carouselImg from '../assets/images/carousel-img.png'
import styles from './HomePage.module.sass'
import Carousel from '../components/Carousel/Carousel'
import cardImg from '../../assets/images/card-img.png'
import CarouselItem from '../components/CarouselItem/CarouselItem'

const Index = () => {
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

  const products = [
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
  ]

  return (
    <MainLayout>
      <Carousel>
        {carouselData.map((carouselItem) => {
          return (
            <CarouselItem>
              <div className={styles.carouselContainer}>
                <img
                  draggable='false'
                  className={styles.carouselImg}
                  src={carouselItem.carouselImg.src}
                />
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
    </MainLayout>
  )
}

export default Index
