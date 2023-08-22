


let arr = [2,4,6,8];
let newArr = arr.map(function(vl,inex){
 return {key : inex,value : vl*vl};

})

console.log(newArr)