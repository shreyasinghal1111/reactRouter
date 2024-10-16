import React, { useEffect, useState } from 'react'

const Api = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response=>response.json())
        .then(
            data=>{
                console.log(data)
                setData(data);

          }
    )    
    },[]);
  return (
    <div className='bg-red-500 text-center p-10 text-4xl'> 
    <h1>Extract Data from API</h1>
    <h1>{data.followers}</h1>
      
    </div>
  )
}

export default Api
