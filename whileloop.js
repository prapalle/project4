//while loop
var i=0;//iniialization
while(i<3){
    console.log("Hello Raghu "+i)
    i++
}
console.log("************************************")


//while loop with an array
const device = ["Mobile","Laptop","Desktop"]
let a=0;
while(device[a]){
    console.log(device[a])
    a++
}
console.log("************************************")
//while loop with an array and concat
const products = ["Mobile","Laptop","Desktop","Headphones"]
let a1=0;
let b1=""
while(products[a1]){
    b1 += products[a1] //b1=Mobiles,Laptop.Desktop,Headphones
    console.log(b1)
    a1++
}
console.log("****** - User input -***********")
 const prompt = require("prompt-sync")({sigint:true})
 //while loop with User input
 let sum=0;
 let n = prompt("Enter a Number:");


 while(n <=0){
 sum=n;
 console.log(sum)
 n = prompt("Enter a Number:")
 }

