class Car{
	constructor(model, year, color){
		this.model = model;
		this.year = year;
		this.color = color;
		
	}
	drive(){
		console.log(`you drive a ${this.model}`);
	}
} 

let car1 =  new Car("Nissan", 1999, "blue");
let car2 =  new Car("suzuki", 2004, "black");
let car3 = new Car("mustang", 2999, "white");

const carArray = [car1, car2, car3];

console.log(carArray); 
console.log(carArray[0]); // to access one of array
console.log(carArray[2].year); 

// access method class
carArray[0].drive();
carArray[1].drive();



// loop the value of class
function loop(car){
	for(let cars of car){
		cars.drive();
	}

}
loop(carArray);