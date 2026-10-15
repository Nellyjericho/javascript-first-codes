// if statement
let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
}

let isRaining = true
if (isRaining){
    console.log('carry an umbrella and a raincoat')
}

// if else statement
let numero = -3
if (numero > 0){
    console.log(`${numero} is a positive number`)
} else {
    console.log(`${numero} is not a positive number`)
}

// if else if else statement
let weather = 'sunny'
if (weather === 'rainy'){
    console.log('you need a rain coat.')
} else if (weather === 'cloudy'){
    console.log('it might be cold, you need a jacket.')
} else {
    console.log('it is sunny, you need sunglasses.')
}

let b = 4
let a = b + 3
if (0 < a && a <10){
    console.log('a is between 0 and 10')
}
else if (10 < a && a < 20){
    console.log('a is between 10 and 20')
}
else {
    console.log('a is greater than or equal to 20 or less than or equal to 0')
}

// switch statement
let dayUserInput = prompt('What day is today?')
let day = dayUserInput.toLowerCase()

switch (day){
    case 'monday':
        console.log('Today is Monday')
        break
        case 'tuesday':
        console.log('Today is Tuesday')
        break
        case 'wednesday':
        console.log('Today is Wednesday')
        break
        case 'thursday':
        console.log('Today is Thursday')
        break
        case 'friday':
        console.log('Today is Friday')
        break
        case 'saturday':
        console.log('Today is Saturday')
        break
        case 'sunday':
        console.log('Today is Sunday')
        break
        default:
        console.log('It is not a week day.')
}

// Ternary operator
let isRaining1 = true
isRaining1
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)