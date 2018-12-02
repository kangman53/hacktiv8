// function tukarBesarKecil(kalimat) {
//   var abjadK = 'abcdefghijklmnopqrstuvwxyz';
//   var abjadB = abjadK.toUpperCase()// you can only write your code here!
//   var temp = '';
//   var newKata = '';
//   for(var i = 0; i<kalimat.length; i++){
//     for(var j = 0; j<abjadK.length;j++){
//       if(kalimat[i] === abjadK[j]){
//         temp = abjadB[j];
//         break;
//       } else if(kalimat[i]===abjadB[j]){
//         temp = abjadK[j];
//         break;
//       } else {
//         temp = kalimat[i];
//       }
//     }
//     newKata += temp;
//   }
//   return newKata;
// }

function tukarBesarKecil(kalimat) {
  var result = '';
  for(var i = 0;i < kalimat.length; i++){
    if(kalimat[i] === kalimat[i].toLowerCase()){
      result += kalimat[i].toUpperCase();
    } else if(kalimat[i] === kalimat[i].toUpperCase()){
      result += kalimat[i].toLowerCase();
    }
  }
  return result;
}
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
