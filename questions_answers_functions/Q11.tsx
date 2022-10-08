import React from 'react'
const favorite_mode_of_transportation = [
  'I would like to own a Honda YBR motorcycle.',
  'I would like to own a Honda Civic Car.',
  'I would like to own a Tesla Car.',
  'I would like to own a Toyota Revo.',
]

const Q11 = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold'>favorite_mode_of_transportation:</h1>
        {favorite_mode_of_transportation.map((vehicle, index) => (
          <li key={index}>{vehicle} </li>
        ))}
      </div>
    </div>
  )
}

export default Q11
