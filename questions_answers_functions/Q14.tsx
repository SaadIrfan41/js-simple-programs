import React from 'react'
const names = ['haddi', 'waleed', 'junaid', 'niazi']
const Q14 = () => {
  const newInvitationList = [...names]

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
        <h1 className='font-bold mt-5'>People Invited to Dinner:</h1>
        {newInvitationList.map((name, index) => (
          <li key={index}>{name} , you are invited to my dinner party.</li>
        ))}
      </div>
      <h1 className='font-bold mt-5 capitalize'>
        {' '}
        I have found a bigger dinner table. <br />
        NEW LIST OF PEOPLE INVITED TO THE DINNER PARTY.
      </h1>
      <span className=' hidden'>
        {newInvitationList.unshift('Hamza')}
        {newInvitationList.splice(
          Math.ceil(newInvitationList.length / 2),
          0,
          'Hassan'
        )}
        {newInvitationList.push('Haleem')}
      </span>

      <ul>
        {newInvitationList.map((name, index) => (
          <li key={index}>{name} , you are invited to my dinner party.</li>
        ))}
      </ul>
    </div>
  )
}

export default Q14
