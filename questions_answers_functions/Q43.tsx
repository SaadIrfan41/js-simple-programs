import React from 'react'
const make_car = (manufacturer: string, model: string, ...options: any) => {
  const cars = {
    manufacturer,
    model,
  }
  // for (let option in options) {
  //   cars[option] = value
  // }

  // {
  //   options.map((option: string, index: number) => (
  //     <>{(cars[options.value] = option)}</>
  //   ))
  // }
  console.log(options)
  return JSON.stringify(cars)
}
let color, year

const Q43 = () => {
  return (
    <div>
      {make_car('Honda', 'Civic', (color = 'white'), (year = 2022))}
      <br />
      {make_car('Toyota', 'Altis', (color = 'Black'), (year = 2021))}
    </div>
  )
}

export default Q43
