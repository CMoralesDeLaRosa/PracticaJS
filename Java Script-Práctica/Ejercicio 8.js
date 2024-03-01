/*Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:*/

function findLongestWord(param) {
  let longestWord = param[0]
  for (i = 0; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
      longestWord = param[i]
    }
  }
  return longestWord
}

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
console.log(findLongestWord(avengers))
