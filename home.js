// alert('hello world')
// console.log('hellow world ');
// to display your codes on a browser . use  document.write('hello world ');
// challenge 1: Your Age in Days 

// var or let

function ageInDays(){
   var birthYear = prompt('What year were you born.... Good friend?');
   var ageInDays = (2023 - birthYear) * 365;
   var h1 = document.createElement('h1');
   var textAnswer = document.createTextNode('you are'+ ageInDays + 'days old today');
   h1. setAttribute('id', 'ageInDays');
   h1. appendChild(textAnswer);
   document.getElementById('flex-box-result').appendChild(h1);
} 

 function reset(){
   var h1 = document.createElement('h1');
    document.getElementById( 'ageInDays').reset('');

    console.log(ageInDays)
 }

 document.write('hello world ');
