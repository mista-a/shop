import { Button } from '@mui/material'
import React, { useState } from 'react'
import styles from './Counter.module.sass'

const Counter = () => {
  const [counter, setCounter] = useState(1)

  const increment = () => {
    setCounter((prevState) => prevState + 1)
  }
  const decrement = () => {
    if (counter > 1) {
      setCounter((prevState) => prevState - 1)
    }
  }

  return (
    <div className={styles.counter}>
      <button
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
        onClick={increment}
      >
        +
      </button>
      <span>{counter}</span>
      <button
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
        onClick={decrement}
      >
        -
      </button>
    </div>
  )
}

export default Counter
