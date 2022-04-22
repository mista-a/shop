import React, { FC } from 'react'
import styles from './CarouselItem.module.sass'

interface CorouselItemProps {
  width?: number
}

const CarouselItem: FC<CorouselItemProps> = ({ children, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width }}>
      {children}
    </div>
  )
}

export default CarouselItem
