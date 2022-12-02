// anonymouse object = object without name,
//    no need a unique name, less code and effiesien
//

class Car{
    constructor(model, type){
        this.model = model;
        this.type = type;
    }
}

// example with name
let car1 = new Car("Nissan", "S13");
let car2 = new Car("Nissan", "S14");
let car3 = new Car("Nissan", "S15");
let car4 = new Car("Nissan", "240sx");

let arrayCar = [car1, car2, car3, car4];
console.log(`a normal write code : ${arrayCar[0].model} ${arrayCar[0].type}`)
// lot of code we write


// example anonymouse object
let car = [ new Car("Nissan", "S13"),
            new Car("Nissan", "S14"),
            new Car("Nissan", "S15"),
            new Car("Nissan", "240sx") ]
console.log("with anonim object : ", car[0].model, car[0].type)
// look a lees code and cool
//


// loop 
console.log("loop for in array");
for(let cars of car){
    console.log(cars);
}

// loop
console.log("loop foreach in array");
car.forEach(allCar => console.log(`${allCar.model} ${allCar.type }`)); 
