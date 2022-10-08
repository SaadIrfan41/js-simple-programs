import React from 'react'

const make_shirt = (size: string, message: string) => {
  return 'Size: ' + size + ' ' + 'Message:' + message
}
const Q34 = () => {
  return <div>{make_shirt('Large', 'I love Javascript')}</div>
}

export default Q34
