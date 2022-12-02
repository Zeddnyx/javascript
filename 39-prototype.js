function Mhs(nama, energi) {
	this.nama = nama;
	this.energi = energi;
}

//ini di bawah prototype ( kita bisa buat object tanpa membuat ulang )
Mhs.prototype.makan = function(porsi) {
	this.energi += porsi;
	return `hallo ${this.nama}, energi kamu bertambah ${this.energi}`;
}
Mhs.prototype.main = function (jam) {
	this.energi -= jam;
	return `energi kamu sisa ${this.energi}`;
}
let mhs1 = new Mhs('zedd',10);
