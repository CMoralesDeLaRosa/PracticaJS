/*Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:*/
function average(param) {
  let media = 0
  for (i = 0; i < param.length; i++) {
    media += param[i] / param.length
  }
  return media
}

const numbers = [12, 21, 38, 5, 45, 37, 6]

console.log(average(numbers))
