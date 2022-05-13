import { Button } from '@mui/material'
import React, { FC, useState } from 'react'
import Color from '../Color/Color'
import styles from './Colors.module.sass'

const Colors: FC = () => {
  const [colors, setColors] = useState([])
  const [colorsCount, setColorsCount] = useState(1)

  const addColor = () => {
    setColorsCount(colorsCount + 1)
    setColors([
      ...colors,
      { id: colorsCount, color: { r: 0, g: 0, b: 0, a: 1 } },
    ])
  }

  // const findById = (id: number, arr, action: () => void) => {
  //   arr.forEach((arrItem) => {
  //     if (arrItem.id === id) {
  //       action()
  //     }
  //   })
  // }

  const changeColor = (id: number, newColor: object) => {
    colors.forEach((color) => {
      if (color.id === id) {
        color.color = newColor
      }
    })
    setColors([...colors])
  }

  const deleteColor = (id: number) => {
    colors.forEach((color, index) => {
      if (color.id === id) {
        colors.splice(index, 1)
      }
    })
    setColors([...colors])
  }

  return (
    <>
      <Button onClick={addColor}>Add color</Button>
      <div className={styles.colors}>
        {colors.map((color) => {
          return (
            <Color
              key={color.id}
              color={color.color}
              id={color.id}
              deleteColor={deleteColor}
              changeColor={changeColor}
            />
          )
        })}
      </div>
    </>
  )
}

export default Colors
