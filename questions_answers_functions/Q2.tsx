import React from 'react'
const name = 'sAAd irFaN'
const capitalize = (word: string) => {
  const loweredCase = word.toLowerCase()
  return word[0].toUpperCase() + loweredCase.slice(1)
}
const Q2 = () => {
  return (
    <div>
      <h2 className=' font-semibold '>LowerCase: {name.toLowerCase()}</h2>
      <h2 className=' font-semibold '>UpperCase: {name.toUpperCase()}</h2>
      <h2 className=' font-semibold '>TitleCase: {capitalize(name)}</h2>
    </div>
  )
}

export default Q2
