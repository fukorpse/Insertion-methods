//Implemente uma função que remova todos os elementos até encontrar um número par
//(inclusive). Verifique os elementos a partir do início do vetor.
//Considere o seguinte vetor [1, 3, 5, 7, 9, 12, 15, 17, 19, 21].
let v = [1, 3, 5, 7, 9, 12, 15, 17, 19, 21];

alert(v);
removerAte2();
alert(v);

function removerAtePar (){
    let num = v.shift();
    while (num % 2 != 0) {
        num = v.shift();
    }
}