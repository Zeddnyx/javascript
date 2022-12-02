// contoh kita puhya function dengan paramater string 
function Hello(nama) {
    console.log(`hello ${nama}`);
}
// nah ini harus menunggu di panggil dengan isi parameter nya
// sekarang kita akan buat function callback nya

function tampilPesan(panggil) {
    let namaaa = prompt('name? ');
    panggil(namaaa);  // Nama, adalah function buka parameter
    // panggil adalah calback
}

// sekarang Kita panggil 
tampilPesan(Hello); // isi parameter nya adalah function Hello tidak perlu pake ()

// jadi func hello akan menunggu func tampilPesan dulu untuk mengambil isi parameter nya



// asynchronous callback
function Async(namaa) {
	let urname = prompt('nama async  ');
	namaa(urname);
}

Async( ngaran => console.log(ngaran));