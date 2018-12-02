// TANTANGAN MBAK ICHA
// function palindrome(kata) {
//   var batas = kata.length;
//   for(var i = 0; i < batas; i++){
//       if(kata[i] !== kata[batas-1-i]){
//         return false;
//       }
//   }
//   return true;
// }

function palindrome(kata){
  var tempKata = '';
  for(var i = 0; i<kata.length;i++){
    tempKata = kata[i] + tempKata;
  }
  return kata === tempKata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
