import React from 'react'
const user_Names = ['haddi', 'waleed', 'admin', 'junaid', 'niazi']

const Q29 = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold'>USER NAME OF PEOPLE LOGING INn</h1>
        {user_Names.length !== 0 ? (
          user_Names.map((name, index) => (
            <li key={index}>
              {name === 'admin'
                ? `Hello ${name}, would you like to see a status report?`
                : `Hello ${name}, thank you for logging in again`}
            </li>
          ))
        ) : (
          <span>We need to find some users!</span>
        )}
      </div>
      {user_Names.splice(0)}
    </div>
  )
}

export default Q29
