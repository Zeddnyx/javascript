class Player{
	score = 0;

    pause(){
    	console.log("you paused the game"); 
    }
    stop(){
    	console.log("you stop the game");
    }
    
}

let player1 = new Player();

console.log(player1.pause); 

player1.score += 5;
console.log(player1.score);



// constructor
class student {
	constructor(name, age){
		this.name = name;
		this.age  = age; 
	}
	study (){
		console.log(`${this.name} is study`);
	}
}

const  student1 = new student("zedd", 19);
const  student2 = new student("udin", 20);

console.log(student1.name);
console.log(student2.age);
student1.study();