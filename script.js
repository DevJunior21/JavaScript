/*
let num1 = 5
let num2 = 10
 soma
let soma = (num1+num2)
console.log(soma)


let sub = (num1-num2)
console.log(sub)

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail)

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio')

console.log(indexOfPortfolio);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index +=1){
  console.log("ta caro")
  console.log(groceryList[index])
  

}


let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}
*/
let n = 5
let simbolo = '*'
let entrada =''
for(let index = 0; index < n; index +=1){
  entrada =  entrada + simbolo
}
for (index = 0; index < n; index += 1){
  console.log(entrada)
}