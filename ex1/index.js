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
