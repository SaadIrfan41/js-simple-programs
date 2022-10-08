import React from 'react'
const name = `    Hello        World`

const Q5 = () => {
  return (
    <div>
      <p className='whitespace-nowrap'>{name}</p>
      <p className=''>{name.trim()}</p>
    </div>
  )
}

export default Q5
