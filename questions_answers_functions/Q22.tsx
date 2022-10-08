import React from 'react'

const sentence_1: string = 'The cat is brown'
const sentence_2: string = 'The cat is black'
const randomTxt: string = 'My Name IS SAAD IRFan'
const number_1: number = 8
const number_2: number = 18
const hour: number = 9
const minute: number = 30
const names = ['haddi', 'waleed', 'junaid', 'niazi']

const Q22 = () => {
  return (
    <div>
      <h1 className='font-bold mt-5'>
        Tests for equality and inequality with strings
      </h1>
      <h1>Sentence 1: {sentence_1}</h1>
      <h1>Sentence 2: {sentence_2}</h1>
      <span>
        {sentence_1 === sentence_2 && 'These two sentences are euqal'}
      </span>
      <span>
        {sentence_1 !== sentence_2 && 'These two sentences are not euqal'}
      </span>
      <h1 className='font-bold mt-5'>Tests using the lower case function</h1>
      <h1> {randomTxt}</h1>
      <span>
        {randomTxt === randomTxt.toLowerCase() &&
          'This Sentence is in lower case'}
      </span>
      <span>
        {randomTxt !== randomTxt.toLowerCase() &&
          'This Sentence is not in lower case'}
      </span>

      <h1 className='font-bold mt-5'>
        Numerical tests involving equality and inequality, greater than and less
        than, greater than or equal to, and less than or equal to
      </h1>
      <h1>Number 1: {number_1}</h1>
      <h1>Number 2: {number_2}</h1>
      <span>
        {number_1 === number_2 && (
          <span>
            These two numbers are euqal
            <br />
          </span>
        )}
      </span>
      <span>
        {number_1 !== number_2 && (
          <span>
            These two numbers are not euqal
            <br />
          </span>
        )}
      </span>
      <span>
        {number_1 > number_2 && (
          <span>
            Number 1 is Greater than Number 2<br />
          </span>
        )}
      </span>
      <span>
        {number_1 < number_2 && (
          <span>
            Number 2 is Greater than Number 1 <br />
          </span>
        )}
      </span>
      <span>
        {number_1 >= number_2 && (
          <span>
            Number 1 is Greater than or equal to Number 2<br />
          </span>
        )}
      </span>
      <span>
        {number_1 <= number_2 && (
          <span>
            Number 1 is Less than or equal to Number 2 <br />{' '}
          </span>
        )}
      </span>
      <h1 className='font-bold mt-5'>Tests using &quot;OR&quot; operators</h1>
      {hour < 10 || hour > 18 ? (
        <span>
          The office is closed. <br />
        </span>
      ) : (
        <span>
          The office is Open. <br />
        </span>
      )}
      <h1 className='font-bold mt-5'>Tests using &quot;AND&quot; operators</h1>
      {hour == 9 && minute == 30 && (
        <span>
          The time is 9:30 <br />
        </span>
      )}
      <h1 className='font-bold mt-5'>
        Test whether an item is in an array or NOT
      </h1>
      <div>
        <h1 className='font-bold'>LIST OF NAMES</h1>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </div>
      {names.indexOf('junaid') !== -1 ? (
        <span>
          Junaid is in this array <br />
        </span>
      ) : (
        <span>
          Junaid is not this array <br />
        </span>
      )}
      {names.indexOf('saad') !== -1 ? (
        <span>
          Saad is in this array <br />
        </span>
      ) : (
        <span>
          Saad is not in this array <br />
        </span>
      )}
    </div>
  )
}

export default Q22
