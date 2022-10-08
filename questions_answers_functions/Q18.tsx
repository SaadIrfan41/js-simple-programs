import React from 'react'

const data = {
  mountain1: 'Chogori/K-2',
  mountain2: 'Nanga Parbat',
  mountain3: 'Gasherbrum No. I/Hidden Peak',
  mountain4: 'Falchan Kangri / Broad Peak',
  mountain5: 'Gasherbrum No. II',
}
const MountainNames = Object.values(data)

const Q18 = () => {
  return (
    <div>
      <h1 className='font-bold'>List of Mountains:</h1>
      {MountainNames.map((name, index) => (
        <li key={index}>{name} </li>
      ))}
    </div>
  )
}

export default Q18
