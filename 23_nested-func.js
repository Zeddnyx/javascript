// nested function = a function inside other function
//    other function have a Access to inner function
//    inner function are hidden from outside the other


let name = "zedd";
let inbox  = 0;

function all() {
    displayname();
    displayinbox();
    
    function displayname(){
        console.log(`welcome ${name}`);
    }
    function displayinbox(){
        console.log(`you have ${inbox}`);
    }
}
all();