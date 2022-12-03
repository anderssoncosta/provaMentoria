/*
2 - Estamos nos aproximando do final do ano, e precisamos validar quais alunos passaram ou não, para isso, vamos contar com uma sequência de dados, que chamamos de Array, a partir dessa sequência, precisamos calcular a média do aluno, a maior e a menor nota, e por final, exibir na tela: Nome do aluno, nota do aluno - Situação (Aprovado ou Reprovado). Para este exercício, vamos considerar a média sendo 6.
*/

const anoLetivo = [
    {
    aluno: 'Mateus Santana',
    primeiroBimestre: '2.5',
    segundoBimestre: '7.5',
    terceiroBimestre: '8',
    quartoBimestre: '3'
    },
    {
    aluno: 'Joab Torres',
    primeiroBimestre: '4.5',
    segundoBimestre: '3.5',
    terceiroBimestre: '10',
    quartoBimestre: '8'
    },
    {
    aluno: 'Suzane Barbosa',
    primeiroBimestre: '6.5',
    segundoBimestre: '5.5',
    terceiroBimestre: '8',
    quartoBimestre: '6'
    },
    {
    aluno: 'Daniele Camilo',
    primeiroBimestre: '5.5',
    segundoBimestre: '5.5',
    terceiroBimestre: '7',
    quartoBimestre: '6'
    }
    ]
    
   

const media = anoLetivo.map(ano => (parseFloat(ano.primeiroBimestre) + parseFloat(ano.segundoBimestre) + parseFloat(ano.terceiroBimestre) + parseFloat(ano.quartoBimestre))/4)

const aluno = anoLetivo.map(ano => ano.aluno)

for (let i = 0; i < media.length; i++) {
    for (let y = 0; y < aluno.length; y++) {
    }
    // console.log(aluno[i] +" " +media[i])

    if(media[i] >= 6){
        console.log(aluno[i] + " sua média é: " + media[i] + " e você está APROVADO!")
    }
    if(media[i] < 6){
        console.log(aluno[i] + " sua média é: " + media[i] + " e você está REPROVADO!")
    }
}
