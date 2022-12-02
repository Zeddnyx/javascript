const jawaban = Math.floor(Math.random() * 10 + 1);
let tebakan = 0;

document.getElementById("submit").onclick = function() {
	let tebak = document.getElementById("number").value;
	tebakan+=1; 
	
	if(tebak == jawaban) {
		alert(` jawaban kamu benar ${jawaban}, Kamu menebak ${tebakan}x`);
	}
	else if(tebak < jawaban) {
		alert('Terlalu kecil');
	}
	else{
		alert('Terlalu besar');
	}
}