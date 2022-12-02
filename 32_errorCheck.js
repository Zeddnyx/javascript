// error = object with description 
//       of somthing when wrong
//
// throw =  extecuted as user-defined error 

try{
    let x1 = window.prompt("Enter a nunber");
    x1 = Number(x1);
    
    if(isNaN(x1)) throw `${x1} that wasn't a number!`;
    if(x1 == "")  throw  "Please input a number!";


    console.log(`${x1} is a number`);
}
catch(error){
    console.log(error);
}



