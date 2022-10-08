import React from 'react'
const make_car = (manufacturer: string, model: string, ...options: any) => {
  const cars = {
    manufacturer,
    model,
  }
  for (let i = 0, l = options.length; i < l; i++) {
    let keys = Object.keys(options[i])
    for (let j = 0, k = keys.length; j < k; j++) {
      console.log(options[i][keys[j]])
      //@ts-ignore
      cars[keys[j]] = options[i][keys[j]]
    }
  }
  // for (let option in options) {
  //   cars[Object.keys(options[option])] = Object.values(options[option])
  // }

  // console.log(Object.keys(options))
  return JSON.stringify(cars)
}

const Q43 = () => {
  return (
    <div>
      {make_car('Honda', 'Civic', { color: 'white' }, { year: 2022 })}
      <br />
      {make_car('Toyota', 'Altis', { color: 'white' }, { year: 2021 })}
    </div>
  )
}

export default Q43
