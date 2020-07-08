//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
//As tecnologias também devem ser objetos contendo nome e especialidade,
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza.

const programador =  {
    nome: `carlos`,
    idade: 32,
 }

const tecnologia = [
    { nome: 'C++',
     especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }

]

console.log(`o usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${tecnologia[0].nome} com especialidade em ${tecnologia[0].especialidade}`)


