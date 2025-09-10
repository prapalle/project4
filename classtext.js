class Car{
    constructor(model,brand){
        this.model=model;
        this.brand=brand;
    }
start(){
    console.log(`Start a Car ${this.model} and speed`);
    return this.model
}
Stop(){
    console.log(`Stop a Car ${this.brand} `)
}    


};
const mycar1 = new Car("XUV700","Mahindra");
document.getElementById("1359").innerHTML = "Hello, "+mycar1.start();
