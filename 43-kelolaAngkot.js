function Angkot(supir, penumpang, trayek, kas){
    this.supir = supir;
    this.penumpang = penumpang;
    this.trayek = trayek;
    this.kas = kas;

    this.peNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    
    this.peTurun = function(namaPenumpang, uang){
    	if(this.penumpang.length === 0) {
    		alert('belom ada penumpang');
    		return false 
    	}
    	for( let i = 0; i < this.penumpang.length; i++ ){
    		if (this.penumpang[i] == namaPenumpang){
    			this.penumpang[i] = undefined;
    			this.kas += uang;
    			return this.penumpang;
    		}
    	}
    }

    this.kasMasuk = function(uang) {
        this.kas.push(uang);
        return this.kas;
    }
}


let Angkot1 = new Angkot("ucok", [], ["cibaduyut", "cikadap"], 0)
