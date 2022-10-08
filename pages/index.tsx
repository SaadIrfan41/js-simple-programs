import type { NextPage } from 'next'
import { useState } from 'react'
import Q1 from '../questions_answers_functions/Q1'
import Q10 from '../questions_answers_functions/Q10'
import Q11 from '../questions_answers_functions/Q11'
import Q12 from '../questions_answers_functions/Q12'
import Q13 from '../questions_answers_functions/Q13'
import Q14 from '../questions_answers_functions/Q14'
import Q15 from '../questions_answers_functions/Q15'
import Q16 from '../questions_answers_functions/Q16'
import Q17 from '../questions_answers_functions/Q17'
import Q18 from '../questions_answers_functions/Q18'
import Q19 from '../questions_answers_functions/Q19'
import Q2 from '../questions_answers_functions/Q2'
import Q20 from '../questions_answers_functions/Q20'
import Q21 from '../questions_answers_functions/Q21'
import Q22 from '../questions_answers_functions/Q22'
import Q23 from '../questions_answers_functions/Q23'
import Q24 from '../questions_answers_functions/Q24'
import Q25 from '../questions_answers_functions/Q25'
import Q26 from '../questions_answers_functions/Q26'
import Q27 from '../questions_answers_functions/Q27'
import Q28 from '../questions_answers_functions/Q28'
import Q29 from '../questions_answers_functions/Q29'
import Q3 from '../questions_answers_functions/Q3'
import Q30 from '../questions_answers_functions/Q30'
import Q31 from '../questions_answers_functions/Q31'
import Q32 from '../questions_answers_functions/Q32'
import Q33 from '../questions_answers_functions/Q33'
import Q34 from '../questions_answers_functions/Q34'
import Q35 from '../questions_answers_functions/Q35'
import Q36 from '../questions_answers_functions/Q36'
import Q37 from '../questions_answers_functions/Q37'
import Q38 from '../questions_answers_functions/Q38'
import Q39 from '../questions_answers_functions/Q39'
import Q4 from '../questions_answers_functions/Q4'
import Q40 from '../questions_answers_functions/Q40'
import Q41 from '../questions_answers_functions/Q41'
import Q42 from '../questions_answers_functions/Q42'
import Q43 from '../questions_answers_functions/Q43'
import Q5 from '../questions_answers_functions/Q5'
import Q6 from '../questions_answers_functions/Q6'
import Q7 from '../questions_answers_functions/Q7'
import Q8 from '../questions_answers_functions/Q8'
import Q9 from '../questions_answers_functions/Q9'

const navigation = [
  {
    name: 'Q1: Personal Message: Store a person`s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”',
    id: 1,
  },
  {
    name: 'Q2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.',
    id: 2,
  },
  {
    name: 'Q3: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.”',
    id: 3,
  },
  {
    name: 'Q4: Famous Quote 2: Repeat Exercise 3, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message',
    id: 4,
  },
  {
    name: 'Q5: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces',
    id: 5,
  },
  {
    name: 'Q6: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.You should create four lines that look like this: console.log(5 + 3)',
    id: 6,
  },
  {
    name: `Q7: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.`,
    id: 7,
  },
  {
    name: `Q8: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.`,
    id: 8,
  },
  {
    name: `Q9: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.`,
    id: 9,
  },
  {
    name: `Q10: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.`,
    id: 10,
  },
  {
    name: `Q11: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle`,
    id: 11,
  },
  {
    name: `Q12: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.`,
    id: 12,
  },
  {
    name: `Q13: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

`,
    id: 13,
  },

  {
    name: `Q14: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

`,
    id: 14,
  },
  {
    name: `Q15: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.`,
    id: 15,
  },
  {
    name: `Q16: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.`,
    id: 16,
  },
  {
    name: `Q17: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.`,
    id: 17,
  },
  {
    name: `Q18: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.`,
    id: 18,
  },
  {
    name: `Q19: They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.`,
    id: 19,
  },
  {
    name: `Q20: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.`,
    id: 20,
  },
  {
    name: `Q21: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.`,
    id: 21,
  },
  {
    name: `Q22: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array`,
    id: 22,
  },
  {
    name: `Q23: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

`,
    id: 23,
  },
  {
    name: `Q24: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.`,
    id: 24,
  },
  {
    name: `Q25: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.`,
    id: 25,
  },
  {
    name: `Q26: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.`,
    id: 26,
  },
  {
    name: `Q27: avorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!`,
    id: 27,
  },
  {
    name: `Q28: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again`,
    id: 28,
  },
  {
    name: `Q29: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.`,
    id: 29,
  },
  {
    name: `Q30: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.`,
    id: 30,
  },
  {
    name: `Q31: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.`,
    id: 31,
  },
  {
    name: `Q32: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!`,
    id: 32,
  },
  {
    name: `Q33: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!`,
    id: 33,
  },
  {
    name: `Q34: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.`,
    id: 34,
  },
  {
    name: `Q35: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.`,
    id: 35,
  },
  {
    name: `Q36: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country`,
    id: 36,
  },
  {
    name: `Q37: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.`,
    id: 37,
  },
  {
    name: `Q38: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.`,
    id: 38,
  },
  {
    name: `Q39: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.`,
    id: 39,
  },
  {
    name: `Q40: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified..`,
    id: 40,
  },
  {
    name: `Q41: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.`,
    id: 41,
  },
  {
    name: `Q42: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.`,
    id: 42,
  },
  {
    name: `Q43: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.`,
    id: 43,
  },
]

const Home: NextPage = () => {
  const [currentQuestion, setcurrentQuestion] = useState(1)
  return (
    <div className='flex'>
      <div>
        <nav className=' flex-1 px-2 space-y-1 max-w-xs bg-gray-800 h-screen overflow-auto fixed'>
          {navigation.map((question) => (
            <button
              key={question.id}
              onClick={() => setcurrentQuestion(question.id)}
              className={` ${
                currentQuestion === question.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              } group flex items-center px-2 py-2 text-sm font-medium rounded-md mt-5`}
            >
              {question.name}
            </button>
          ))}
        </nav>
      </div>
      <main className='flex-1 pl-80'>
        <div className='py-6'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-2xl font-semibold text-gray-900'>Answers</h1>
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
            {/* Replace with your content */}
            <div className='py-4'>
              {currentQuestion === 1 ? (
                <Q1 />
              ) : currentQuestion === 2 ? (
                <Q2 />
              ) : currentQuestion === 3 ? (
                <Q3 />
              ) : currentQuestion === 4 ? (
                <Q4 />
              ) : currentQuestion === 5 ? (
                <Q5 />
              ) : currentQuestion === 6 ? (
                <Q6 />
              ) : currentQuestion === 7 ? (
                <Q7 />
              ) : currentQuestion === 8 ? (
                <Q8 />
              ) : currentQuestion === 9 ? (
                <Q9 />
              ) : currentQuestion === 10 ? (
                <Q10 />
              ) : currentQuestion === 11 ? (
                <Q11 />
              ) : currentQuestion === 12 ? (
                <Q12 />
              ) : currentQuestion === 13 ? (
                <Q13 />
              ) : currentQuestion === 14 ? (
                <Q14 />
              ) : currentQuestion === 15 ? (
                <Q15 />
              ) : currentQuestion === 16 ? (
                <Q16 />
              ) : currentQuestion === 17 ? (
                <Q17 />
              ) : currentQuestion === 18 ? (
                <Q18 />
              ) : currentQuestion === 19 ? (
                <Q19 />
              ) : currentQuestion === 20 ? (
                <Q20 />
              ) : currentQuestion === 21 ? (
                <Q21 />
              ) : currentQuestion === 22 ? (
                <Q22 />
              ) : currentQuestion === 23 ? (
                <Q23 />
              ) : currentQuestion === 24 ? (
                <Q24 />
              ) : currentQuestion === 25 ? (
                <Q25 />
              ) : currentQuestion === 26 ? (
                <Q26 />
              ) : currentQuestion === 27 ? (
                <Q27 />
              ) : currentQuestion === 28 ? (
                <Q28 />
              ) : currentQuestion === 29 ? (
                <Q29 />
              ) : currentQuestion === 30 ? (
                <Q30 />
              ) : currentQuestion === 31 ? (
                <Q31 />
              ) : currentQuestion === 32 ? (
                <Q32 />
              ) : currentQuestion === 33 ? (
                <Q33 />
              ) : currentQuestion === 34 ? (
                <Q34 />
              ) : currentQuestion === 35 ? (
                <Q35 />
              ) : currentQuestion === 36 ? (
                <Q36 />
              ) : currentQuestion === 37 ? (
                <Q37 />
              ) : currentQuestion === 38 ? (
                <Q38 />
              ) : currentQuestion === 39 ? (
                <Q39 />
              ) : currentQuestion === 40 ? (
                <Q40 />
              ) : currentQuestion === 41 ? (
                <Q41 />
              ) : currentQuestion === 42 ? (
                <Q42 />
              ) : currentQuestion === 43 ? (
                <Q43 />
              ) : (
                <Q1 />
              )}
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
