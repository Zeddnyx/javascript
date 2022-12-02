// buat variable

let nama = 'Zedd';
let umur = 19;

let all = `Hallo nama saya ${nama}, umur saya ${umur} tahun`;
console.log(all); // hasilnya akan biasa saja 


// sekarang kita gunakan template loterral
// buat function dulu 
function panggil(call){
    return call; 
}
let all2 = panggil`Hallo nama saya ${nama}, umur saya ${umur} tahun`;
// hasilnya akan muncul arrray 3 baris, expression nya tidak di hitung
// expression nya hanya muncul jika kita tambah parameter di func panggil
// dan di return nama attribute nya