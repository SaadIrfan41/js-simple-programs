import React from 'react'
const animals = ['Dog', 'Cat', 'Tiger', 'Bear']

const Q33 = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold'>Names of animals:</h1>
        {animals.map((animal, index) => (
          <li key={index}>{animal + ' will make a great pet!'}</li>
        ))}
      </div>
      <h3>All of these animals are Vertebrates</h3>
      <h3>Any of these animals would make a great pet!</h3>
    </div>
  )
}

export default Q33
