const persons = [

  {firstname:"shiva",lastname:"prasad"},
  {firstname:"relangi",lastname:"mavaya"},
  {firstname:"shiva",lastname:"Thaninki"}

];
let newArr = persons.map(getfunction);
console.log(newArr);
function getfunction(jim){

    return[jim.firstname,jim.lastname].join(" ");;
}