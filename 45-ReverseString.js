function word(str) {
  // split to convert string to Array
  // reverse() u knoe the drill
  // join(' ') membalikan array jadi string

  return str.split(' ').reverse().join(' ')
}

console.log(word("zedd oo hello worldxxxx"))