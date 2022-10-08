import React from 'react'
const pizzas = [
  'Veggie Pizza',
  'Pepperoni Pizza',
  'Meat Pizza',
  'BBQ Chicken Pizza',
]

const Q32 = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold'>Pizza i like:</h1>
        {pizzas.map((pizza, index) => (
          <li key={index}>I like {pizza} .</li>
        ))}
      </div>
      <h3>I really love pizza!</h3>
    </div>
  )
}

export default Q32
