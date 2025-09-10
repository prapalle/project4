//string - word of sentence
//Number - upto 64bit
//Bigint - Large number
//Boolean = Yes or No
//object - 
//undefined
//Array

const name = "Automation Testing"
const char= "A"
let l=124424214214
let l1=BigInt("5325523532523523525523")
let b=true
let u
//Car is an object
const Car={
model:"Thar",
price:12345,
Brand:"Mahindra"
}

//Array
const courses=["java","javascript","Html"]
const places=["Bangalore","Hyderabad","Chennai","Pune"]
console.log(name)
console.log(char)
console.log(l)
console.log(b)
console.log(u)
console.log(Car)
console.log(courses)
console.log(places)
console.log(courses.concat(places))
courses.push("JMeter") //add new element
console.log(courses.concat(places))
courses.pop() //last element will be removed

let a1=null
console.log(typeof(a1))
