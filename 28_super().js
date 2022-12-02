// when u using inheritance and using contractor u need super method, is useful

class Animal{
	constructor(name, age){
		this.name = name;
		this.age  = age;
	}
}
class Hawk extends Animal{
	constructor(name, age, speedFly){
		 super(name, age); // this super method
		 this.speedFly = speedFly;
	}
}

const hawk = new Hawk("blackNight", 2, 200); // Don't forget using new, im always forget that:)
console.log(hawk.name);
console.log(`hes speed is ${hawk.speedFly}/km`); 