const num = document.getElementById('num')
const res = document.getElementById('res')

function exibir(resultado) {
  res.innerHTML = `<p>Resultado da conversão para binário: ${resultado}</p>`
}

function decimal() {
  const decimal2Binario = (num) => (num >>> 0).toString(2)
  const resultado = decimal2Binario(num.value)
  exibir(resultado)
}

function binario() {
  const binario2Decimal = (num) => num.toString(10)
  const resultado = binario2Decimal(parseInt(num.value, 2))
  exibir(resultado)
}