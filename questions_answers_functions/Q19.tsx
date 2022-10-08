import React from 'react'

const myMountains: any = new Object()
;(myMountains.mountain1 = 'Chogori/K-2'),
  (myMountains.mountain2 = 'Nanga Parbat'),
  (myMountains.mountain3 = 'Gasherbrum No. I/Hidden Peak'),
  (myMountains.mountain4 = 'Falchan Kangri / Broad Peak'),
  (myMountains.mountain5 = 'Gasherbrum No. II')

const Q19 = () => {
  return (
    <div>
      <h1 className='font-bold'>List of Mountains:</h1>
      {Object.values(myMountains).map((name: any, index) => (
        <li key={index}>{name}</li>
      ))}
    </div>
  )
}

export default Q19
