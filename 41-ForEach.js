 var angka = ['yoo','wasap','hallo','yaaaa'];
// for( var i = 0; i < angka.length; i++) {
//	console.log(angka[i])
// }

// nah sekarang kita gunakan forEach
// jadi untuk setiap e yg ada di aray angka, lakukan console.log(e)
angka.forEach(e => {
	console.log(e);
});
// jadi hasilnya sama 


// jika ingin menampilkan index nya seperti ini
angka.forEach((e, i) => {
	console.log(i + e);
});
// akan menampilkan aray dan index nya