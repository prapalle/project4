const prompt = require("prompt-sync")({sigint:true})
let i = parseInt(prompt("ether the i value:"));
switch(i){
case 1:
i="This is 1st case";
break;
case 2:
i="This is 2nd case";
break;
case 3:
i="This is 3rd case";
break;
case 4:
i="This is 4th case";
break;
}

console.log(i)

