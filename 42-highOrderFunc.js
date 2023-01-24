function app(kerja, selesai) {
  return `saya sedang ${kerja}, `+ selesai(08)
}

function selesai(jam) {
  return `jam ${jam} selesai`
}

const highOrderFunc = app('belajar',selesai);

console.log(highOrderFunc) // saya sedang belajar, jam 08 selesai
