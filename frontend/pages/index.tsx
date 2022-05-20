import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import carouselImg from '../assets/images/carousel-img.png'
import styles from './Home.module.sass'
import Carousel from '../components/Carousel/Carousel'
import CarouselItem from '../components/CarouselItem/CarouselItem'
import ProductList from '../components/ProductList/ProductList'
import { Api } from '../API/index'
import { NextPage } from 'next'

interface HomeProps {
  products: Array<any>
  categories: { id: number; name: string }
}

const Home: NextPage<HomeProps> = ({ products, categories }) => {
  // const [products, setProducts] = useState([
  //   { img: '', name: '', colors: [], id: null, views: null, price: null },
  // ])

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
      <ProductList products={products} />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const products = await Api().product.getPopular()
    // const categories = await Api().product.getCategories()

    return { props: { products: products.products } }
  } catch (err) {
    console.log(err)
  }
  return { props: { products: null } }
}

export default Home
