import React from 'react'
const age: number = 26
const Q26 = () => {
  return (
    <div>
      AGE IS {age}
      <br />
      {age < 2 ? (
        <span>
          the person is a baby <br />
        </span>
      ) : age === 2 || age < 4 ? (
        <span>
          the person is a toddler <br />
        </span>
      ) : age === 4 || age < 13 ? (
        <span>
          the person is a kid.. <br />
        </span>
      ) : age === 13 || age < 20 ? (
        <span>
          the person is a kid.. <br />
        </span>
      ) : age === 20 || age < 65 ? (
        <span>
          the person is an adult. <br />
        </span>
      ) : age >= 65 ? (
        <span>
          the person is an elder.. <br />
        </span>
      ) : (
        ''
      )}
    </div>
  )
}

export default Q26
