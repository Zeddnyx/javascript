let coba = ['nol','satu','dua'];

let [a,b,c] = coba;
console.log(a); // akan lebih mudah  untuk menampikkan index array



// sekarang Object

let mhs = {
    nama : 'zedd',
    umur : 19,
    about : 'nothin'
};

let {nama, umur, about} = mhs;
console.log(nama);
console.log(about);

//skipping array
let coba2 = ['nol','satu','dua','tiga'];
let [e, , ,d] = coba2
console.log(a); // 0
console.log(d); // 3


// res parameter
// jika kalian mempumyai banyak nilai array kan banyak klo harus nulis semua satu2  
// kita biea gunakan rest parameter  
 
 let [z, ...all] = [1,2,3,4,5,6,7,8];
 // klo di tulis satu2 kan panjang jadi nya maka gunakan lah rest parameter (...)
 // kDi semua nilai selain yg var z akan di tamping di var al

console.log(z); // 1
console.log(all); // sisa dari z



// assign ke variable barul
// kita ngga bisa lngsung mengganti nma variable nya karna akan undefined
// gunakan : untuk mengganti

let mhs2 = {
    nama : 'zedd',
    umur : 19,
    about : 'nothin'
};

let {nama : n, umur : u} = mhs2;
console.log(n)