// Map = object that hold key-value  pairs of any data type 

const grocery = new Map([
	["t-shirt",20],
	["jeans", 10],
	["clothes",40],
	["jacket",50 ]
]);

// grocery.forEach((value, key) => console.log(`${key} $${value}`));


// using get method = menjumlahkan value 
let belanja = 0;

belanja += grocery.get("t-shirt");
belanja += grocery.get("jeans");
console.log(belanja);


// set methods = add list key-value
grocery.set("underwear", 10);
grocery.forEach((value, key) => console.log(`${key} $${value}`));

// delete method
// grocery.delete("jeans");

// has method = to check if there have key-value ( boolean)
console.log(grocery.has("jeans"));
console.log(grocery.has("baju"));
