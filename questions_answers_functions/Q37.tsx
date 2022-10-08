import React from 'react'

const city_country = (city: string, country: string) => {
  return (
    <p>
      {city} ,{country}
    </p>
  )
}
const Q37 = () => {
  return (
    <div>
      <h1> {city_country('Paris', 'France')}</h1>
      <h1> {city_country('Islamabad', 'Pakistan')}</h1>

      <h1>{city_country('Mumbai', 'India')}</h1>
    </div>
  )
}

export default Q37
