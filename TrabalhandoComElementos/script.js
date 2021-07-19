let x = document.getElementById('elementoOndeVoceEsta')
let pai = x.parentElement
pai.style.color = 'red'

let primogenito = document.getElementById('primeiroFilhoDoFilho')
primogenito.innerText = 'Olá Mundo'
console.log(primogenito)