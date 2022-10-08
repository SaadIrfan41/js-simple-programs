import React from 'react'
const alien_color: string = 'green'
const Q23 = () => {
  return (
    <div>
      <h1 className='font-bold mt-5'>
        test whether the alien’s color is green
      </h1>
      {alien_color === 'green' && (
        <span>
          the player just earned 5 points <br />
        </span>
      )}
      {alien_color === 'red' && (
        <span>
          the Alien IS DEAD <br />
        </span>
      )}
    </div>
  )
}

export default Q23
