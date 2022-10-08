import React from 'react'
const magiciansList = [
  'AMASIS',
  'THE AMAZING JOHNATHAN',
  'CRISS ANGEL',
  'THEODORE ANNEMANN',
]
const show_magicians = (magicians: string[]) => {
  return (
    <h1>
      <div>
        <h1 className='font-bold'>Names of Magicians</h1>
        {magicians.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </div>
    </h1>
  )
}

const Q39 = () => {
  return <div> {show_magicians(magiciansList)}</div>
}

export default Q39
