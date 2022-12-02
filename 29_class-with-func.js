// first we make a class then we access class and change value with function

class Car{
    constructor(model, country, color){
	this.model = model;
	this.country = country;
	this.color = color;
    }
}
let car1 = new Car("Nissan", "japan", "white");

// display the value of class Car
displayInfo(car1);
function displayInfo(Car){
	 console.log(car1.model);
	 console.log(car1.color);
}

// change value of class
changecolor(car1, "blue");
displayInfo(car1)
function changecolor(car, color){
	car.color = color;
}