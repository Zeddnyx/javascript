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
console.log('rest parameters ', sum(a,b,c,d));


// array.forEach() = executes  a provide callBack function once for array element
// 
 let nama = ["zedd","abdul","ucom"];
 nama.forEach(capital);
 
 
 function capital(element, index, array){
     array[index] = element[0].toUpperCase() + element.substring(1); // this line will capitalized the first string of array nama
 }
 console.log('forEach ',nama[0]);
 
 // panggil semua array list 
 function call(panggil){
     console.log('forEach with call all '+panggil);
 }
 nama.forEach(call);
 
 
 // aray.map()
 // executes a provide callBack function once for aray element 
 // and create a new array 
 
 let numb = [1,2,3,4];
 let mapping = numb.map(squere );
 
 mapping.forEach(print);
 
 function squere(element){
     return Math.pow(element, 2); 
 }
 
 function print(element){
      console.log('array.map()',element);
 }
 
 
 
 /// array.filter() = createa new areay with all elements
 //                    that pass the  test provided by function
 
let age = [19, 16, 18, 20];
let adults = age.filter(checkAge);
 
adults.forEach(print);
 
function checkAge(element){
    return element >= 18; 
}

function print(element){
    console.log('array filter()',element);
}



// array.short() =  short number
//

let grade = [100, 50, 80, 70,90];
grade = grade sort(lowNumb);
grade.forEach(print); 
 
function greatNumb(x, y){ 
    return y - x;
    // 100-50
}

function lowNumb(x, y){
    return x - y; 
    // 50 - 100
}

function print(element){
    console.log(element);
}