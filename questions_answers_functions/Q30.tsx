import React from 'react'
const current_users = ['hAdDi', 'waLeeD', 'SaAd', 'junaid', 'niazi']

const new_users = ['HAddI', 'walEEd', 'saaD', 'akram', 'hassan']

const Q30 = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold'>People Invited to Dinner:</h1>
        {current_users.map((name, index) => (
          <li key={index}>
            {new_users.find(
              (element) => element.toLowerCase() === name.toLowerCase()
            )
              ? `${new_users[index]} need to enter a new username.`
              : `${new_users[index]} username is available`}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Q30
