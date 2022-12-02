function order(kerja , selesai){
	console.log(`sya sedang ${kerja} ...`)
	selesai();
}
// selesai adalah function, 
// berarti kita harus buat func selesai nya

// func selesai
function selesai(){
	console.log('selesai mengerjakan');
}

order('membangun',selesai);


// jadi func selesai adalah callback dan setiap function yg ada func callback
// di sebut higher order function