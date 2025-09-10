const car={
model : "xuv700",
Brand:"Mahindra",

//function
start: function(){
    console.log("start xuv 700")
},
accel: function(){
    console.log("speed xuv 700 "+this.model)
},
stop: function(){
    console.log("stop xuv 700 "+this.Brand)
}
};
console.log(car.start())
console.log(car.accel())
console.log(car.stop())