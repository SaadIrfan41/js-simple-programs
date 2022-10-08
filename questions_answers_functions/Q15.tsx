import React from 'react'
const names = ['haddi', 'waleed', 'junaid', 'niazi']
const Q15 = () => {
  const newInvitationList = [...names]
  let arrayLength = newInvitationList.length

  // const index = names.indexOf('niazi')
  // console.log(index)
  // console.log(arrayLength)
  const removeElements = (list: Array<string>) => {
    // console.log(list)
    let deleteditems = []
    for (let i = list.length; i > 2; i--) {
      deleteditems[i - 1] = list[i - 1]
      // console.log(list[5])
      list.pop()
    }

    return deleteditems
  }
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
      <h1 className='font-bold mt-5 capitalize'>
        I can only Invite 2 People to dinner
      </h1>
      <div>
        {removeElements(newInvitationList).map((name, index) => (
          <p key={index}>{name} ,sorry i can’t invite you to dinner</p>
        ))}
      </div>
      <ul>
        <h1 className='font-bold mt-5 capitalize'>
          People Still Invited to the dinner Party
        </h1>
        <li>
          {newInvitationList.map((name, index) => (
            <p key={index}>{name} , you are invited to my dinner party.</p>
          ))}
        </li>
      </ul>
      <span className=' hidden'> {newInvitationList.splice(0)}</span>
      <pre className='mt-5'>NAMES:[{newInvitationList}]</pre>
    </div>
  )
}

export default Q15
