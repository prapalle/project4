let text="Cypress"
let l=text.length
console.log("Character at Index 3 "+text.charAt(3))
console.log("length of text variable is" +l)
console.log("Character from index 1 to 3 is" +text.slice(1,3))
console.log(text.toUpperCase())
console.log(text.replace("Cypress","selenium"))
console.log(text.concat("with javascript"))
let reversedtext="";
for (let i = text.length-1;i>=0;i--){
    reversedtext=reversedtext+text[i];
}
console.log("reversed text is:" +reversedtext);
