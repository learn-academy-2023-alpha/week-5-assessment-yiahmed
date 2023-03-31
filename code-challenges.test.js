// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { array, number } = require("yargs")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
// Pseudo: Create a test for the function called codedMessage which takes in a string and returns a string with a coded message.
// Expect correct reference error  "ReferenceError: codedMessage is not defined "before function is initialized
// Expect ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (3 ms) after function has been initialized

describe("codedMessage", () => {
  it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        const secretCodeWord1 = "Lackadaisical"
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        const secretCodeWord2 = "Gobbledygook"
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        const secretCodeWord3 = "Eccentric"
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
})
}) // ---> ReferenceError: codedMessage is not defined
// ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (3 ms)

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
// Pseudo: Create a function called codedMessage that takes in a string.
// Within the function create an object called keyLetters with the values that will be converted through the coded message ('a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0) while also taking into account any capitalization.
// Convert the string into an array using .split() and map through the array
// Return each letter with its matching value from the keyLetters object or return the value if it doesn't match any of the values within the object.
// Use .join() to return the array back into a string
// codedMessage = (string) => {
//     let keyLetters = {
//       'a': '4',
//       'A': '4',
//       'e': '3',
//       'E': '3',
//       'i': '1',
//       'I': '1',
//       'o': '0',
//       'O': '0'
//     };
  
//     return string.split('').map(value => {
//       return keyLetters[value] || value;
//     }).join('');
//   }
  

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// Pseudo: create a test fro the function called valueContains that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
// Expect correct reference error "ReferenceError: valueContains is not defined" before function is initialized
// Expect ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (3 ms)

describe("valueContains", () => {
  it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
    expect(valueContains(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
        const letterE = "e"
    expect(valueContains(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
})
}) // --->  ReferenceError: valueContains is not defined
// ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (3 ms)

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
// Pseudo: Create a function called valueContains that takes in an array and a single letter
// Iterate through the array using .map() and use .includes() to determine whether or not the specific value being iterated upon includes that single letter
// Return the values if they contain the single letter
// Use .filter after the .map to filter out any undefined values that may be left within the return array
// valueContains = (array, singleLetter) => {
//  return array.map(value => {
//     if (value.includes(singleLetter) || value.includes(singleLetter.toUpperCase())){
//         return value
//     }
// }).filter(value => value !== undefined)
// }

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
// Pseudo: create a test for the function fullHouse that takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind.
// Expect correct reference error "ReferenceError: fullHouse is not defined" before function is initialized
// Expect "✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind. (2 ms)" after function is initialized
describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind.", () => {
        const hand1 = [5, 5, 5, 3, 3]
      expect(fullHouse(hand1)).toEqual(true)
        const hand2 = [5, 5, 3, 3, 4]
      expect(fullHouse(hand2)).toEqual(false)
        const hand3 = [5, 5, 5, 5, 4]
      expect(fullHouse(hand3)).toEqual(false)
        const hand4 = [7, 2, 7, 2, 7]
      expect(fullHouse(hand4)).toEqual(true)
  })
  }) // --->   ReferenceError: fullHouse is not defined
// ✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind. (2 ms)

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
// Pseudo: create a function called fullHouse that takes in an array of 5 numbers
// within the function create an object called count that will store the count of the numbers that are the same within the array
// iterate through the array using the map method and assign the default value of the counts object to 0 (since it is undefined) and add 1 for each count of the number within the array
// return the value of counts if it includes 2 and 3 which results in a full house.
// fullHouse = (arr) => {
//     const counts = {};
// //* the logic for the undefined value in the object being converted to 0 before adding 1 took me a while to figure out.
//     arr.map(value => counts[value] = (counts[value] || 0) + 1);
//     return Object.values(counts).includes(2) && Object.values(counts).includes(3);
//   }