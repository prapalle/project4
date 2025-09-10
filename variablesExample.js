// default(not preferred),var,let,const
a=20
var v=123;
let l="javascript";
const c="Final"
console.log("a")
console.log(a)
console.log(v)
console.log(l)
console.log(c)


// global variable and local variable
{
    var v1=112
    let l1=234
    const c1=345
    console.log(v1)
    console.log(l1)
    console.log(c1)
}
console.log("*****************")
console.log(v1)
//console.log(l1)
//console.log(c1)
console.log("##############################")
function test(){
    let i="Local variable 1"
    const j="Local variable 2"
    console.log(i)
    console.log(j)
}
test()


