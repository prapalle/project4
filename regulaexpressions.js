const prompt = require("prompt-sync")({sigint:true})
const num=/^[0-9]+$/;

function validate(input){
    if(num.test(input)){
        console.log("input is a number" +input)
    }else{
        console.log("input is not a number"+input)
    }
}
let n = prompt("Enter a value:");
validate(n)

console.log("****** Email format validation*******")
const emailFormat=/\S+@\S+\.\S+/;

function emailValidation(email){
    if(emailFormat.test(email)){
        console.log("Email is in valid format" +email)
    }else{
        console.log("email is in not valid format" +email)
    
    }
}

let email=prompt("Enter eamil id:")
emailValidation(email)
