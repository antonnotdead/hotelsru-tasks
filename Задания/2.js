/*

Я не совсем понял уловия задания.
Не понятно является ли число с плавающей точкой числом произвольной длинны.
Поэтому сделал методы для чисел bigInt

*/
function add(a,b){
    a = BigInt(a);
    b = BigInt(b);
    return a+b;
}

function subs(a,b){
    a = BigInt(a);
    b = BigInt(b);
    return a-b;
}

function myl(a,b){
    a = BigInt(a);
    b = BigInt(b);
    return a*b;
}

function div(a,b){
    a = BigInt(a);
    b = BigInt(b);
    return a/b;
}