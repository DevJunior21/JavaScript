let h1 = document.createElement('h1') // Passo 1    
document.body.appendChild(h1)
h1.innerText = ('Exercicio 5.2 - JavaScript DOM')

let mainContent = document.createElement('div')   // Passo 2 
mainContent.classList.add('mainContent')
document.body.appendChild(mainContent)

let centercontent = document.createElement('div') // Passo 3
centercontent.classList.add('center-content')
mainContent.appendChild(centercontent)

let paragraph = document.createElement('p') //Passo 4
centercontent.appendChild(paragraph)
paragraph.innerText = ('DOM é muito maneiro')

let conteudo = document.createElement('div') //Passo 5
conteudo.classList.add('left-content')
mainContent.appendChild(conteudo)

let conteudodireita = document.createElement('div') //Passo 6
conteudodireita.classList.add('right-content')
mainContent.appendChild(conteudodireita)

let img = document.createElement('img')
img.src = 'https://picsum.photos/200'
img.classList.add('small-image')
conteudo.appendChild(img)

let lista = document.createElement('ul')
let numeros = ['Um','Dois','Tres','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez']

for (index = 0; index < numeros.length; index +=1){
    let li = document.createElement('li')
    li.innerText = numeros[index]
    lista.appendChild(li)
}
conteudodireita.appendChild(lista)