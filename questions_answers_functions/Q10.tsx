import React from 'react'
const names = ['haddi', 'waleed', 'junaid', 'niazi']
const Q10 = () => {
  return (
    <div>
      <h1 className='font-bold mt-5 capitalize'>
        Some of my friends names are:
      </h1>
      {names.map((name, index) => (
        <li key={index}>{name} is my friend</li>
      ))}
    </div>
  )
}

export default Q10
