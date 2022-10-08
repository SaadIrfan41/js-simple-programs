import React from 'react'
const names = ['haddi', 'waleed', 'junaid', 'niazi']
const Q12 = () => {
  return (
    <div>
      {names.map((name, index) => (
        <li key={index}>{name} , you are invited to my dinner party.</li>
      ))}
    </div>
  )
}

export default Q12
