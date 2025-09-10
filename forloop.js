for(let a=0;a<5;a++){
    console.log("value of a is" +a)
}

console.log("************************")

const products=["Laptop","Mobiles","Headphones","Desktop","Speakers","Dress"]
for(let a=0;a<products.length;a++){
    console.log(products[a])

}
console.log("********************************")
const products1=["Laptop","Mobiles","Headphones","Desktop","Speakers","Dress"]


for(let a=0,l=products.length,t="";a<l;a++){//a=0,1,2,3,4,5
    t += products1[a]+" ";//t=t+products1[a]
    console.log(t)
}
console.log("********************************")
const products2=["Laptop","Mobiles","Headphones","Desktop"]
let a=0;
l=products2.length
t=""

for( ;a<l;a++){//a=0,1,2,3,4,5
    t += products2[a]+" ";//t=t+products1[a]
    console.log(t)
}
console.log("**************For Loop using of******************")
const list=["laptop","mobiles","headphones","item4","item5"]
for(let item of list){
    console.log(item)

}