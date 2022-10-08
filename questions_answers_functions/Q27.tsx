import React from 'react'
const favorite_fruits = ['Strawberries', 'Blackberries', 'Pomegranate']

const Q27 = () => {
  return (
    <div>
      <h1 className='font-bold mt-5'>
        check for certain fruits in your array.
      </h1>
      {favorite_fruits.map((name, index) => (
        <li key={index}>{name} .</li>
      ))}
      {favorite_fruits.indexOf('apple') !== -1 ? (
        <span>
          You really like Apple <br />
        </span>
      ) : (
        <span>
          Apple is not this array <br />
        </span>
      )}
      {favorite_fruits.indexOf('lemon') !== -1 ? (
        <span>
          You really like Lemons! <br />
        </span>
      ) : (
        <span>
          Lemon is not this array <br />
        </span>
      )}
      {favorite_fruits.indexOf('Strawberries') !== -1 ? (
        <span>
          You really like Strawberries <br />
        </span>
      ) : (
        <span>
          Strawberries is not this array <br />
        </span>
      )}
      {favorite_fruits.indexOf('Oranges') !== -1 ? (
        <span>
          You really like Oranges <br />
        </span>
      ) : (
        <span>
          Oranges is not this array <br />
        </span>
      )}
      {favorite_fruits.indexOf('Banana') !== -1 ? (
        <span>
          You really like Banana <br />
        </span>
      ) : (
        <span>
          Banana is not this array <br />
        </span>
      )}
    </div>
  )
}

export default Q27
