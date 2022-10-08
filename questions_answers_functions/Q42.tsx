import React from 'react'

const make_sandwich = (...sandwitch: string[]) => {
  return (
    <h1>
      <div>
        <h1 className='font-bold'>Making your Shandwitch</h1>
        {sandwitch.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </div>
    </h1>
  )
}

const Q42 = () => {
  return (
    <div>
      <div>
        {make_sandwich(
          'roast beef',
          'cheddar cheese',
          'lettuce',
          'honey dijon'
        )}
        <div>{make_sandwich('turkey', 'apple slices', 'honey mustard')}</div>
        <div>{make_sandwich('peanut butter', 'strawberry jam')}</div>
      </div>
    </div>
  )
}

export default Q42
