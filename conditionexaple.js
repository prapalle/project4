const prompt = require("prompt-sync")({sigint:true})




const a=prompt("Enter a number: ")
const b=prompt("Enter a number: ")
if(a>300){
    console.log("a is greater than 300 and value of a is "+a)
}else{
    console.log("a is not greater  and value of a is "+a)
}
