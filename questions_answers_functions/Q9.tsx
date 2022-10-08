import React from 'react'
const names = ['haddi', 'waleed', 'junaid', 'niazi']
const Q9 = () => {
  return (
    <div>
      Some of my friends names are:{' '}
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </div>
  )
}

export default Q9
