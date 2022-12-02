// object yg mempersentasikan keberhasilan / kegagalan sebuah event yg
// asynchronous di masa yg akan datang 

// states = fulfilled / rejected / pending
// callback = resolved / reject / finally
// aksi  = then / catch

//contoh 1
// kita akan membuat object karna itu kita butuh new dan object nya 
// bukan object biasa, karna itu kta pke promise

let ditepati = false;
const res = new Promise((resolved, rejected) => {
	if(ditepati) {
		resolved('janji di tepati');
	}else {
		rejected('janji tidak di tepati');
	}
});

 //console.log(res);
 // ini hanya akan mengembalikan default Promise
 
 
res 
 	//.then(response  => console.log('ok ' + response ));
    //.catch(response => console.log('not ok ' + response ));
// ini akan menjalankan sesuai isi variable ditepati



// contoh 2 
// kita akan membuat nunggu dulu 
let tepati = true
let janji = new Promise((resolved, rejected) => {
	if( tepati ){
		setTimeout(() => {
			resolved('janji2 di tepati setelah beebrapa waktu');
		}, 2000);
	}
	else {
		setTimeout(() => {
			rejected('janji2 tidak di tepati stelah beberapa waktu');
		}, 2000);
	}
});

console.log('mulai');
//console.log(janji.then(() => console.log(janji)));  // ini cara supaya keliatan asynchronous
janji // ini tidak keliatan asynchronous nya
   .then(resolved => console.log(resolved)); 
//   .catch(tolak => console.log(tolak));
console.log('selesai');



// finally,  apapun isi janji akan jalankan duluan 
console.log('mulai2');
janji
   .finally(() => console.log('selesai menungu'))
   .then(solved => console.log(solved))
//   .catch(tolak => console.log(tolak));
console.log('selesai2');




// di promise ada method nama nya all Promise.all()
// di gunakan jika kalian punya banyak promise yg akan di jalankan sekaligus

let film = new Promise(resolved => {
	setTimeout(() => {
		resolved([{
			film: 'avenger',
			sutradara: 'zedd'
		}])
	}, 3000);
})

let cuaca = new Promise(resolved => {
	setTimeout(() => {
		resolved ([{
			kota: 'bogor',
			cuaca: 'hujan',
			suhu: '19°'
		}])
	}, 2500);
})

//film.then(res => console.log(res));
//cuaca.then(res => console.log(res));
// ini cara biasa 

// sekarang kita gunakan primise.all
Promise.all([film, cuaca])
   .then(res => {
      let [film, cuaca] = res;
      console.log(film);
      console.log(cuaca);
   });