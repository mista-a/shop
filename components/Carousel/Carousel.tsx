import React, { Children, FC, useEffect, useRef, useState } from 'react'
import styles from './Carousel.module.sass'

const Carousel: FC = ({ children }) => {
  const carouselRef = useRef<any>()
  const [activeItem, setActiveItem] = useState(0)
  const [drag, setDrag] = useState({
    isScrolling: false,
    startX: 0,
    endX: 0,
    a: 0,
  })

  const updateActiveItem = (item) => {
    if (item >= Children.count(children)) {
      item = 0
    }

    setActiveItem(item)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateActiveItem(activeItem + 1)
    }, 3500)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const onMouseDown = (e) => {
    setDrag({ ...drag, startX: e.screenX, isScrolling: true })
  }

  const onMouseMove = (e) => {
    if (drag.isScrolling) {
      setDrag({ ...drag, a: -(drag.startX / 1000 - drag.endX / 1000) })
    }
  }

  const onMouseUp = (e) => {
    setDrag({
      ...drag,
      endX: e.screenX,
      isScrolling: false,
    })
    console.log('a')
  }

  console.log(drag.isScrolling)

  if (drag.isScrolling) {
    console.log(drag.isScrolling)
  }

  return (
    <div
      ref={carouselRef}
      className={styles.carousel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeItem * 100}%)` }}
      >
        {Children.map(children, (child) => {
          return child
        })}
      </div>
      <div className={styles.carouselControllers}>
        {Children.map(children, (child, index) => {
          return (
            <button
              className={`${styles.carouselController} ${
                index === activeItem ? styles.activeController : ''
              } `}
              onClick={() => updateActiveItem(index)}
            ></button>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
