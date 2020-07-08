//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.
//Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
//A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

const empresa = {
 nome: `Rocketseat `,
 cor : `roxo` ,
 foco: `progamação`,
 endereco: { Rua: ` Rua Guilherme Gembala `,
            Número: 260

 } 

};
console.log(`a empresa ${empresa.nome}está localizada em${empresa.endereco.Rua},${empresa.endereco.Número}`)