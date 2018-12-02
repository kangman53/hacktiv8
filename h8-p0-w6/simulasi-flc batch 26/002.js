/**
  Diberikan sebuah function bernama indexPrima
  Function tersebut akan menerima sebuah parameter number, kemudian menghasilkan
  angka prima ke -x (sesuai yang diinput).

  Syarat dari soal ini harus menggunakan 1 function saja.

**/

// function indexPrima(n) {
//   //write your code here
//   var counterPrime = 0;
//   var counterIndex = 0;
//   var angka = 2;
//   while (true) {
//     counterPrime = 0;
//     for (var i = 1; i <= angka; i++) {
//       if (angka % i === 0) {
//         counterPrime++;
//       }
//     }
//     if (counterPrime === 2) {
//       counterIndex++;
//       if (counterIndex === n) {
//         return angka;
//       }
//     }
//     angka++;
//   }
// }

function indexPrima(n) {
  //write your code here
  var counterPrime = 0;
  var counterIndex = 0;
  var angka = 0;
  while (counterIndex != n) {
    angka++;
    counterPrime = 0;
    for (var i = 1; i <= angka; i++) {
      if (angka % i === 0) {
        counterPrime++;
      }
    }
    if (counterPrime === 2) {
      counterIndex++;
    }
  }
  return angka;
}

console.log(indexPrima(4)); //7
console.log(indexPrima(50)); //229
console.log(indexPrima(12)); //37
