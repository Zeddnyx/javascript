// arrrow function = compact to a alternative traditional function
// =>
// meringkas function jadi => 

function nama(name){
    console.log(`hallo ${name}`);
}
nama("zedd");

// using arrow func
let yo = (name,age) => console.log(`hallo ${name}, your age: ${age}`)
yo("zedd",19);
// if just 1 argument ( nama ) no need () 


// another example
let angka = function numb(x, y){
    return x / y * 100;
}
console.log(`${angka(50,100)}%`);


// using arrow func
let v = (x, y) =>  x / y * 100 ;
console.log(`using arrow func ${v(70, 100)}%`);



// sort numb areow
let grade = [100, 50, 80, 38, 90];
grade.sort((x, y) =>  y - x );
grade.forEach((element) => console.log(element)) ;



// jadi yg tadi nya kita nulis function sekarang kita ganti pke arrow
var bio = nama => { return nama }
console.log(bio('asep'))

// jika memakaki 2 argument harus pke tanda kurung
var alamat = (kota, kec) => {
    return `kota ${kota}   kec ${kec}`;
}
console.log(alamat('bogor', 'nanggung'));