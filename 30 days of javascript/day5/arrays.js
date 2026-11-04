// creating arrays
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// Creating an array containing different data types
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

// Creating an array using split method
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)

// Accessing array items using index
const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100]
const firstNum = numbers1[0] // 0
const secondNum = numbers1[1] // 3.14
const thirdNum = numbers1[2] // 9.81
const fourthNum = numbers1[3] // 37
const lastNum = numbers1[numbers1.length - 1] // 100

console.log(firstNum, secondNum, thirdNum, fourthNum, lastNum)

const countries1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
] // List of countries
let lastIndex = countries1.length - 1
console.log(countries1[0]) // first item
console.log(countries1[6]) // middle item
console.log(countries1[lastIndex]) // last item

//Methods to manipulate array
// Array constructor
const arr1 = Array() // creates an an empty array
const eightEmptyValues = Array(8) // creates an array with 8 empty values
console.log(eightEmptyValues)

//creating static values with fill
const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

// concatenating arrays with concat
const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

//getting the size of an array
const number = [1,2,3,4,5,6,7]
console.log(number.length)

// getting index an element in arr array
const num = [1,2,3,4,5]
console.log(num.indexOf(0))// returns -1
console.log(num.indexOf(7))// returns -1
console.log(num.indexOf(2))// returns 1

// getting last index of  an element in an array 
const numb = [1,2,3,4,5,3,1,2,6,8]
console.log(numb.lastIndexOf(2))//7

//using include
const number2 = [1,2,3,4,5]
console.log(number2.includes(2))//true
console.log(number2.includes(7))//false

//checking array
const number3 = [1,2,3,4,5]
console.log(Array.isArray(number3))//true

const number4 = 100
console.log(Array.isArray(number4))//false

//converting array to string
const numbers2 = [1,2,3,4,5]
console.log(numbers2.toString())//1,2,3,4,5

//joining array elements
const numbers3 = [1,2,3,4,5]
console.log(numbers3.join())//1,2,3,4,5
console.log(numbers3.join(''))//12345
console.log(numbers3.join(' '))//1 2 3 4 5
console.log(numbers3.join('-'))//1-2-3-4-5

//slicing array elements
const numbers5 = [1,2,3,4,5]
console.log(numbers5.slice())//[1,2,3,4,5]
console.log(numbers5.slice(0))//[1,2,3,4,5]
console.log(numbers5.slice(0, 3))//[1,2,3]
console.log(numbers5.slice(1, 4))//[2,3,4]

//splicing array elements
const numbers6 = [1,2,3,4,5]
numbers6.splice()//[1,2,3,4,5]
numbers6.splice(0)//[]
numbers6.splice(0, 1)//[2,3,4,5]
numbers6.splice(3)//[1,2,3]
numbers6.splice(1, 2)//[1,4,5]
console.log(numbers6)

//reversing array elements
const numbers7 = [1,2,3,4,5]
numbers7.reverse()//[5,4,3,2,1]
console.log(numbers7)

//sorting array elements
const webTechs1 = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
webTechs1.sort()//['CSS', 'HTML', 'JS', 'MongDB', 'Node', 'React', 'Redux']
console.log(webTechs1)

const numbers8 = [0, 3.14, 9.81, 37, 98.6, 100]
numbers8.sort()//[0, 100, 3.14, 37, 9.81, 98.6]
console.log(numbers8)

//adding item to an array using push
const numbers9 = [1,2,3,4,5]
numbers9.push(6)
console.log(numbers9)

//removing item from an array using pop at the end
const numbers10 = [1,2,3,4,5]
numbers10.pop()
console.log(numbers10)

//adding item to an array using unshift at the beginning
const numbers11 = [1,2,3,4,5]
numbers11.unshift(0)
console.log(numbers11)

//removing item from an array using shift
const numbers12 = [1,2,3,4,5]
numbers12.shift()
console.log(numbers12)

// array of arrays 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)

