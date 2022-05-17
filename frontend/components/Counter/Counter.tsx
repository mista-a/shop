import React, { FC, useState } from 'react'
import styles from './Counter.module.sass'

interface CounterProps {
  counter: number
  setCounter: (counter?: number) => void
}

const Counter: FC<CounterProps> = ({ counter, setCounter }) => {
  // const [counter, setCounter] = useState(defaultCounter || 1)

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
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
