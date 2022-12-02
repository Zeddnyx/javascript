// aray reduce() = reduce an array to a singhle value

let Price = [5,10,20];
let total = Price.reduce(check);

function check(total, element) { 
    return total + element;
}
console.log('aray reduce :',total);


// res parameters = represent an indefinite number of parameters
// pack argument into an array

let a = 1;
let b = 2;
let c = 3;
let d = 4;

function sum(...numbers){
    let total = 0;
    for(let numb of numbers){
        total+=numb
    }
    return total
}
console.log(sum(a,b,c,d));


// array.forEach() = executes  a provide callBack function once for array element
 
 let nama = ["zedd","abdul","ucom"];
 nama.forEach(capital);
 
 function capital(element, index, array){
     array[index] = element[0].toUpperCase() + element.substring(1); // this line will capitalized the first string of array nama
     
 }
 console.log(nama[0]);