import React from 'react'
const alien_color: string = 'red'
const Q25 = () => {
  return (
    <div>
      <h1 className='font-bold mt-5'>
        test whether the alien’s color is green OR not
      </h1>
      {alien_color === 'green' ? (
        <span>
          the player earned 5 points <br />
        </span>
      ) : alien_color === 'yellow' ? (
        <span>
          the player earned 10 points <br />
        </span>
      ) : alien_color === 'red' ? (
        <span>
          the player earned 15 points. <br />
        </span>
      ) : (
        ''
      )}
    </div>
  )
}

export default Q25
