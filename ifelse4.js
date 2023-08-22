   var x = 12;
   var y = 14;
   var z = 27;

   if (x<y && x<z)
   {

    if(y<z){
    console.log(x +  "  "+y+ "  "+z);
   }
    else{
        console.log(x + " "+z+ "  "+y);  
    }
}
else if (y <x && y <z){

    if (x>z){
           console.log(y+ "  " +x+ "  "+z);   
    }else{
        console.log(y+ "  "+z+ "  "+x);
    }
}
else if(z<x && z<y) {
    if(y>x){
    console.log(z+ "  "+y+ " "+x);
    }
    else{
        console.log(z+ " "+x+ " "+y);
 }
}
else{

    console.log("three number are equal");
}
