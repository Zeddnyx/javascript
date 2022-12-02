// menggunakan variable dari function lain

function nama() {
	let nama = "zedd";
	
	happyBrth(nama);
}

function happyBrth(nama) {
	console.log("congratulations", nama);
}
// call function
nama() 


// return
let area;
let height = window.prompt("height :");
let width  = window.prompt("width  :");

area = GetArea(height, width);

console.log("the area is", area);
 
function GetArea(height, width) {
    let results = height * width ;
    return results;
}


// function expression
// function yg di di simpan ke dalama variable

let fuEx = function zedd(age){
    return age;
}
console.log(fuEx(19));