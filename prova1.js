/* 
1 - Abaixo eu tenho uma sequência aleatória de números, preciso que você multiplique
todos os valores do array, por uma novo valor, caso o valor seja maior que 10, preciso que
multiplique por 4 e caso seja menor de 10, preciso que multiplique por 6. Caso o valor seja
10, apenas deixe ele como está.
[10, 9, 15, 22, 34, 1, 9, 10, 11, 50, 78, 12, 99, 10]

*/

const numeros = [10, 9, 15, 22, 34, 1, 9, 10, 11, 50, 78, 12, 99, 10];
let testador = 0;
let multiplique;

/*
    Esse eu consegui fazer de duas formas, criando função para cada condição, e apenas usando o IF
*/

for (let i = 0; i < numeros.length; i++) {
    testador = numeros[i];

    maiorQue10();
    /*  
        if(testador > 10){
            multiplique = testador * 4;
            console.log("O numero  " + testador + " é maior que 10, multiplicado por 4: " + multiplique)
        }
    */
    
    menorQue10();
    /*
        if (testador < 10) {
            multiplique = testador * 6;
            console.log("O numero  " + testador + " é menor que 10, multiplicado por 6: " + multiplique)
        }
    */
    
    igual10();
    /*
        if(testador == 10){
            console.log("O numero  " + testador + " é igual a 10, sendo assim, permanece");
        }
    */
    

}

function maiorQue10(){
    if(testador > 10){
        multiplique = testador * 4;
        console.log("O numero  " + testador + " é maior que 10, multiplicado por 4: " + multiplique)
    }
}

function menorQue10(){
    if (testador < 10) {
        multiplique = testador * 6;
        console.log("O numero  " + testador + " é menor que 10, multiplicado por 6: " + multiplique)
    }
}

function igual10(){
    if(testador == 10){
        console.log("O numero  " + testador + " é igual a 10, sendo assim, permanece");
    }
}