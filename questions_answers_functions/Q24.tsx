import React from 'react'
const alien_color: string = 'red'
const Q24 = () => {
  return (
    <div>
      <h1 className='font-bold mt-5'>
        test whether the alien’s color is green OR not
      </h1>
      {alien_color === 'green' ? (
        <span>
          the player just earned 5 points for shooting the alien <br />
        </span>
      ) : (
        <span>
          the player just earned 10 points. <br />
        </span>
      )}
    </div>
  )
}

export default Q24
