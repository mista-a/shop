import { Button, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import { ChromePicker } from 'react-color'

const AddColor: FC = ({}) => {
  const [colorSelector, setColorSelector] = useState(false)
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 })

  // const handleChangeComplete = (color) => {
  //   setColor(color.hex)
  // }

  const handleChange = (color, event) => {
    setColor(color.rgb)
  }

  const toggleColorSelector = () => {
    setColorSelector(!colorSelector)
  }

  console.log('', color)

  return (
    <div>
      {colorSelector ? (
        <>
          <ChromePicker
            color={color}
            // onChangeComplete={handleChangeComplete}
            onChange={handleChange}
          />
          <Typography>
            {color.r}, {color.g}, {color.b}
          </Typography>
        </>
      ) : (
        <Button onClick={toggleColorSelector}>Add color</Button>
      )}
    </div>
  )
}

export default AddColor
