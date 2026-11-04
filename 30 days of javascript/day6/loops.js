// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//adding all elemnts in an array
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log('Sum of all elements:', sum);

// creating a new array from an existing array
let newArray = [];
for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] * 2);
}
console.log('New array:', newArray);

// while loop
let j = 0;
while (j <= 5){
    console.log(j)
    j++;
} 

// do while loop
let k = 0;
do {
    console.log(k)
    k++
}
while (k <= 5);

//for of loop
let countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const newCountries = [];
for (const country of countries) {
    newCountries.push(country.toUpperCase());
}
console.log('New countries array:', newCountries);

let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const newNames = [];
for (const name of names) {
    newNames.push(name.toUpperCase());
}
console.log('New names array:', newNames);

//for in loop
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki'
}
for (const key in person) {
    console.log(key, ':', person[key]);
}   

//accessing the values using the keys
for (const key in person) {
    console.log(person[key]);
}

//for in loop with an array to get the index and the value
const numbersArray = [1, 2, 3, 4, 5];
for (const index in numbersArray) {
    console.log('Index:', index, 'Value:', numbersArray[index]);
}   

//break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

//continue statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}   