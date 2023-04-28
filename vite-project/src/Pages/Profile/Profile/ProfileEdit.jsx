import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProfileEdit() {

  const {id} = useParams()
  console.log(id)

  return (
    <div>Profile.edit</div>
  )
}
