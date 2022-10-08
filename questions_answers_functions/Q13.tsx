import React from 'react'
const names = ['haddi', 'waleed', 'junaid', 'niazi']
const newInvitationList = [...names]

const Q13 = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold'>People Invited to Dinner:</h1>
        {names.map((name, index) => (
          <li key={index}>{name} , you are invited to my dinner party.</li>
        ))}
      </div>
      <div>
        <h1 className='font-bold mt-5'>Some one cant make it to Dinner:</h1>

        {names.map(
          (name, index) =>
            name === 'niazi' && (
              <li key={index}>{name} , Cant Make it to the Dinner.</li>
            )
        )}
        <span className=' hidden'>
          {newInvitationList.splice(
            newInvitationList.indexOf('niazi'),
            1,
            'Saad'
          )}
        </span>
      </div>
      <div>
        <h1 className='font-bold'>New List of People Invited to Dinner:</h1>
        {newInvitationList.map((name, index) => (
          <li key={index}>{name} , you are invited to my dinner party.</li>
        ))}
      </div>
    </div>
  )
}

export default Q13
