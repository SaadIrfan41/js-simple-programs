import React from 'react'

let size = 'Large'
//   message

const make_shirt = (size: string, message: string) => {
  return 'Size: ' + size + ' ' + 'Message:' + message
}
const Q35 = () => {
  return (
    <div>
      <h1>Shirt 1 : {make_shirt(size, 'I love Javascript')}</h1>
      <h1>Shirt 2 : {make_shirt((size = 'Medium'), 'I love Javascript')}</h1>

      <h1>Shirt 3 : {make_shirt((size = 'Small'), 'HELLO WORLD')}</h1>
    </div>
  )
}

export default Q35
