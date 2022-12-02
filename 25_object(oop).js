// object = a group of property and method 
// property =  what an object has
// method   =  what objects can do
// use . to access to properly/method

const car = {
	 model: "GTR",
	 color: "white",
	 year : 2020,
	 
	 drive : function (){
	 	console.log("you drive the car");
	 },
	 brake : function (){
	 	console.log("you step the brake");
	 }, 
}  
console.log(car.model);

// call func
car.drive();


// this = Reference to a particular object
//         the object depends on immediate context

const car2 = {
	 model: "nissan",
	 color: "blue",
	 year : 1990,
	 
	 drive : function (){
	 	console.log(`you drive the ${this.model}`); // this.
	 },
}  
car2.drive();


// other examples
console.log(this);
// the results is nothing

// u can edit the context
this.window = "my window";
console.log(this.window);