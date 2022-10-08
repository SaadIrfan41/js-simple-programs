import React from 'react'
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Q31 = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold'>People Invited to Dinner:</h1>
        {numbers.map((number, index) => (
          <li key={index}>
            {number === 1
              ? number + 'st'
              : number === 2
              ? number + 'nd'
              : number === 3
              ? number + 'rd'
              : number + 'th'}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Q31
