import React from 'react'
const locations = [
  'switzerland',
  'saudi arabia',
  'Maldives',
  'Paris',
  'New Orleans',
]
const sortedLocations = [...locations].sort()
const reverseSortedLocations = [...sortedLocations].reverse()
const reverseAgainSortedLocations = [...locations].reverse()
const reverseAgainSorted2Locations = [...reverseAgainSortedLocations].reverse()

const Q16 = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold'>Original Locations i want to visit:</h1>
        {locations.map((location, index) => (
          <li key={index}>{location} </li>
        ))}
      </div>
      <div>
        <h1 className='font-bold'>Sorted Locations i want to visit:</h1>
        {sortedLocations.map((location, index) => (
          <li key={index}>{location} </li>
        ))}
      </div>
      <div>
        <h1 className='font-bold'>Original Locations i want to visit:</h1>
        {locations.map((location, index) => (
          <li key={index}>{location} </li>
        ))}
      </div>
      <div>
        <h1 className='font-bold'>Reverse Sorted Locations i want to visit:</h1>
        {reverseSortedLocations.map((location, index) => (
          <li key={index}>{location} </li>
        ))}
      </div>
      <div>
        <h1 className='font-bold'>Original Locations i want to visit:</h1>
        {locations.map((location, index) => (
          <li key={index}>{location} </li>
        ))}
      </div>
      <div>
        <h1 className='font-bold'>Again Reverse Locations i want to visit:</h1>
        {reverseAgainSortedLocations.map((location, index) => (
          <li key={index}>{location} </li>
        ))}
      </div>
      <div>
        <h1 className='font-bold'>
          Back to the original Locations i want to visit:
        </h1>
        {reverseAgainSorted2Locations.map((location, index) => (
          <li key={index}>{location} </li>
        ))}
      </div>
      <div>
        <h1 className='font-bold'>Alphabetical Locations i want to visit:</h1>

        {sortedLocations.map((location, index) => (
          <li key={index}>{location} </li>
        ))}
      </div>
      <div>
        <h1 className='font-bold'>
          Reverse Alphabetical Locations i want to visit:
        </h1>
        {reverseSortedLocations.map((location, index) => (
          <li key={index}>{location} </li>
        ))}
      </div>
    </div>
  )
}

export default Q16
