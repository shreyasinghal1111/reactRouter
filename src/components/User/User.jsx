import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid}=useParams()
  return (
    <div>
      <h1 className='bg-blue-700 text-2xl text-center p-10'>User : {userid}</h1>
    </div>
  )
}

export default User
