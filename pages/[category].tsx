import { useRouter } from 'next/router'
import React from 'react'

const pr = () => {
  const router = useRouter()
  const category = router.query.category

  return <div>{category}</div>
}

export default pr
