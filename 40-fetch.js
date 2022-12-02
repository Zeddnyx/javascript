fetch ('https://reqres.in/api/users/1') 
.then((response) => console.log(response)) // ini hanya mengembalikan promise


// jika ingin menampilkan body mya bisa gunakan json text dll
fetch ('https://reqres.in/api/users/1') 
.then((response) => response.json())
.then((json)=> console.log(json))

// jika cuman response nya aja maka akan menampilkan promise saja harus di tambah json

