function siva(){
console.log('number of arguments passed : ' + arguments.length);
    for(i =0;i<arguments.length;i++)
    {

        console.log(arguments[i]);
    }
}
siva(23,33,34,34,23,43,55,44,22);

siva(33,44);

siva(334,34,340,34,22,34,123,20,43,89,90);

siva('siva','prasad','Thaninki');

siva(true,false,true);