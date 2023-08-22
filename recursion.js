  var r = function factorial(v){

    if (v==1)
    return 1;
    else
    return v * factorial(v-1);
}

y = 5 ;
x = r(y)
console.log(x);