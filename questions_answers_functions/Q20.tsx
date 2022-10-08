import React from 'react'
const names = ['haddi', 'waleed', 'junaid', 'niazi']
// (
//   'Intentional Error calling for names[6]?.toUpperCase()'
// )
names[6]?.toUpperCase()

const Q20 = () => {
  return (
    <div>
      <h1 className='font-bold'>Intentional Error:</h1>
    </div>
  )
}

export default Q20
