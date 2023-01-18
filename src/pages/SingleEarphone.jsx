import React from 'react'
import { useParams } from 'react-router-dom'

const SingleEarphone = () => {
  const {slug} = useParams();
  return (
    <h2>{slug}</h2>
  )
}

export default SingleEarphone