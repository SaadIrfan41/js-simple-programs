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

const make_great = (magicians: string[]) => {
  return (
    <h1>
      <div>
        <h1 className='font-bold'>Names of Great Magicians</h1>
        {magicians.map(
          (name: any, index: number) =>
            (magiciansList[index] = `${name} The Great`)
        )}
      </div>
    </h1>
  )
}
make_great(magiciansList)

const Q40 = () => {
  return (
    <div>
      <div>{show_magicians(magiciansList)}</div>
    </div>
  )
}

export default Q40
