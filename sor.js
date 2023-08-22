 var marks = Array(9,1,29,4,29,69,0,33,29,99,6,49);


 var products = Array ('java','c++','c-language','javascript','Rama','Html-5','Css3');

 console.log(products);
 products.sort();
 console.log(products);

 console.log((marks));

 marks.sort();
 console.log(marks);

var logic = function comp(a,b)
           {
                   return(a-b)

           }

       marks.sort(logic) ;
       
       console.log(marks);


       var siva = Array(23,32,23,12,0,43,44,6,23,11);

       console.log(siva);


       siva.sort();
       console.log(siva);

       var desc = function comp (a,b)
                       {

                        return(b-a);
                       }


      siva.sort(desc);
      console.log(siva);


//b-a

//23,32,23,12,0,43,44,6,23,11
  
  //44,43,32,23,23,12,11,6,0.


  
