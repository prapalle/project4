class Car{
    constructor(model,brand){
        this.model=model;
        this.brand=brand;
    }
start(){
    console.log(`Start a Car ${this.model} and speed`);
}
Stop(){
    console.log(`Stop a Car ${this.brand} `)
}    


};
const mycar1 = new Car("XUV700","Mahindra");
const mycar2 = new Car("Thar","Mahindra");
const mycar3 = new Car("Hector","MG");
//mycar - object reference
//new Car() - Object
mycar1.start();
mycar2.start();
mycar3.start();


mycar1.Stop();
mycar2.Stop();
mycar3.Stop();

