import React from 'react'
const famous_person = 'Prophet Muhammad(P.B.U.H)'
const message =
  '“Do not wish to be like anyone except in two cases. The first is a person, whom Allah has given wealth & he spends it righteously; (the second is) the one whom Allah has given wisdom (the Holy Quran) and he acts according to it and teaches it to others.”'
const Q4 = () => {
  return (
    <div>
      <h1 className=' font-bold underline'> {famous_person} once said:</h1>
      <p>{message}</p>
    </div>
  )
}

export default Q4
