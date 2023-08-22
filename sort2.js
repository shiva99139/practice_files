   var member = Array(12,0,-1,-17,23,90,134);


   console.log(member);


   member.sort();
   console.log(member);


   var logic = function comp(a,b)
               {
                   return(b-a)

               }

               
 member.sort(logic);
 console.log(member);

 member.reverse();

 console.log(member);

