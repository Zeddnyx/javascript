var mbim = ["toyota","bmw","Mercedes Benz","Honda"]
console.log(mbim)
 
//menampilan index tertentu
console.log(mbim[2]);
      
// untuk menambahkan index baru
 mbim.push("Mitsubishi","nissan");

let fruits = ["manggo","orange","apple"];
let vegans = ["tomatto","potatto","salad"];

let market = [fruits,vegans];

for(let all of market){
console.log('loop array ',all);
}

// menambah aray ke aray 
fruits.push(...vegans, ' menanbahkan ke array');  // gunakan (...) untuk menggabungkan array jika tidak akan berpisah
console.log(fruits);
