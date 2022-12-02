// splice 
// splice(indexAwal, mauDiHapusBerapa, elementBaru1, elBaru2)
var sp = ['zedd','sandhika','uvok'];

// add 
sp.splice(1, 0, 'udinnn');
console.log(sp);

// hapus dan ganti element
sp.splice(2, 2, 'aseep', 'osnod');
console.log(sp);

// slice
// slice(awal, akhir);
var arr = ['udin','asep', 'kadrun', 'joun', 'lee'];
var arr2 = arr.slice(1,3); // results asep, kadrun
console.log(arr2.join('-'));

// show array
var array = ['deeuzzz','aswp','ladoe'];
for(let x = 0; x < 3; x++){
    console.log(array[x]);
}
// lebih simple
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// pop() push() shift() unshift()

// pop() menghapus element terkahir
// shift() menghapus element pertama

// push() menmbahkan element di akhir
// unshift menmbahkan element di awal



// forEach
// for loop yg lebih keren and useful
let angka = [1,2,3,4,5,6];

// let fEx = function(n){
//    console.log(n);
// }
// angka.forEach(fEx);

// lebih simple
angka.forEach(function(e){
    console.log(e);
});



// filter
// memfilter array
let angka2 = [3,8,9,20,90,30,25];
let angka3 = angka2.filter(function(x){
//  return x == 5; // mengembalikan array jika ada angka 5 jika kosong maka akan menamplikan array kosong
    return x > 9; // mencari angka lebih besar dari 9 dan di kembalikan
});
console.log(angka3.join(' '));