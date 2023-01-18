import React from 'react'
import { useParams } from 'react-router-dom'

const SingleSpeaker = () => {
  const {slug} = useParams();
  return (
    <h2>{slug}</h2>
  )
}

export default SingleSpeaker