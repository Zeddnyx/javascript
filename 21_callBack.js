// callBack = a function passed an argument to another function

let total = sum(3, 3);

function sum(x, y){
    let results = x + y;
    return results
}
function display(output){
    console.log(output); 
}

display(total);
displayDOM(total);

// callBack in html DOM
sum(5, 5, displayDOM);

function sum(x, y, call){
    let results = x + y ;
    console.log(results);
}
function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById('label').innerHTML = output;
}