//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
//SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;

const nome = `carlos`;
const peso = 150;
const altura = 1.75;

const IMC = (peso / (altura * altura));

if(IMC >= 30){
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você não está acima do peso`)
}




