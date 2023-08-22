function sum(v1,v2)
{
  var x = 'i am from Bhimavaram';

   function add()
   {
      
    var y ='y belongs to prasad function';
    return 'from add: '+ y +'' + x +(v1+v2);
   }
   return add();
}
var res = sum(12,12);
console.log(res);