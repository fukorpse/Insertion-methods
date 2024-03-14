//Implemente uma função que remova todos os elementos até encontrar
//um número múltiplo de 5 (inclusive). Verifique os elementos a partir
//do final do vetor. Considere o seguinte vetor [1, 3, 5, 7, 9, 12, 15, 17, 19, 21].
let v = [1, 3, 5, 7, 9, 12, 15, 17, 19, 21];

alert(v);
removerAte5();
alert(v);

function removerAte5 (){
    let num = v.pop();
    while(num % 5 != 0){
        num = v.pop();
    }
}