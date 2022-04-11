function soma(num1, num2){
    var total;
    total = eval(num1) + eval(num2);
    return total;
}
function subtracao(num1, num2){
    return num1 - num2;
}
function multiplicacao(num1, num2){
    return num1 * num2;
}
function divisao(num1, num2){
    return num1 / num2;
}
function fatorial(num1){
    var fat = 1;
    for (var i = num1; i > 1; i--){
        fat = fat * i;
    }
    return fat;
}
function potencia(num1, num2){
    return num1**num2;
}
function raizN(num1, num2){
    return Math.pow(num1, eval(1.0/num2));
}
function euler(num1){
    var e = 0;
    for (var i=0; i < num1; i++){
        e += 1/fatorial(i);
    }
    return e;
}
function fibonacci(num1){
    var fib = [1,1];
    if (num1 == 1){
        return fib[0];
    }
    else if (num1 == 2){
        return fib;
    }
    else {
        for (var i=2; i<num1; i++){
            fib[i] = fib[i-1]+fib[i-2];
        }
    }
    return fib;
}
function convertbase2(num1){
    var base2=[];
    var resto ;
    for (var i=0; num1>1; i++){
        resto = num1%2;
        base2[i] = resto;
        num1 = Math.trunc(num1/2);
    }
    base2[base2.length] = 1;
    base2.reverse();
    return base2.join("");
}
function seno(num1){
        var rad, sen;
        rad = num1*(Math.PI/180);
        sen = Math.sin(rad);
        return sen;
}
function cosseno(num1){
    var rad, cos;
    rad = num1*(Math.PI/180);
    cos = Math.cos(rad);
    return cos;
}
function tangente(num1){
    var rad, tan;
    rad = num1*(Math.PI/180);
    tan = Math.tan(rad);
    return tan;
}
function resultad(num1, num2, opcao){
    var result
    if (opcao == 1) {
        result = soma(num1, num2);
    }else if (opcao == 2) {
        result = subtracao(num1, num2);
    }
    else if (opcao == 3) {
        result = multiplicacao(num1, num2);
    }
    else if (opcao == 4) {
        if (num2 == 0) {
            alert ("Digite um número diferente de 0")
        }
        result = divisao(num1, num2);
    }
    else if (opcao == 5) {
        result = fatorial(num1);
    }
    else if (opcao == 6) { 
        result = potencia(num1, num2);   
    }
    else if (opcao == 7) {
        result = raizN(num1, num2);
    }
    else if(opcao == 8) {
        result = euler(num1);
    }
    else if(opcao == 9) {
        result = fibonacci(num1);
    }
    else if(opcao == 10) {
        result = Math.PI;
    }
    else if(opcao == 11) {
        result = convertbase2(num1);
    }
    else if(opcao == 12) {
        result = Math.log(num1);
    }
    else if(opcao == 13) {
        result = seno(num1);
    }
    else if(opcao == 14) {
        result = cosseno(num1);
    }
    else if(opcao == 15) {
        result = tangente(num1);
    }
    //document.getElementById("resulta").innerHTML="Resultado = "+result;
    document.querySelector("#resultado").value = result;
}


