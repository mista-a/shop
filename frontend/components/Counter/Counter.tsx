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
        className={`${styles.counterButton} ${styles.decrement}`}
        onClick={decrement}
      >
        -
      </button>
      <span className={styles.value}>{counter}</span>
      <button className={styles.counterButton} onClick={increment}>
        +
      </button>
    </div>
  )
}

export default Counter
