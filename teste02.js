// Crie um programa para calcular a aposentadoria de uma pessoa.
//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos,
// enquanto a mulher precisa ter no mínimo 85 anos na soma;

const nome = `maria `;
const sexo = `f` ;
const idade = 65;
const contribuição = 30;
const somaIC = idade + contribuição;

if( sexo == `m` && contribuição >= 35 && somaIC >= 95 ){
    console.log(`${nome}você pode se aposentar`) }

 else if (sexo == `f` && contribuição >= 30 && somaIC >= 85 ){
     console.log(`${nome}você pode aposentar`)

 } else {
    console.log(`${nome}não pode aposentar`)
}

