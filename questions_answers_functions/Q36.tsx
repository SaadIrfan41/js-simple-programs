import React from 'react'
let city: string = 'Karachi',
  country = 'Pakistan'
const describe_city = (city: string, country: string) => {
  return (
    <p>
      {city} is in {country}
    </p>
  )
}
const Q36 = () => {
  return (
    <div>
      <h1>Country 1 : {describe_city(city, country)}</h1>
      <h1>Country 2 : {describe_city('Islamabad', country)}</h1>

      <h1>Country 3 : {describe_city('Mumbai', 'India')}</h1>
    </div>
  )
}

export default Q36
