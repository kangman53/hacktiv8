// function kaliTerusRekursif(angka) {
//   var angkaString = String(angka);
//   if(angkaString.length > 1){
//     var hasil = 1;
//     for(var i = 0; i<angkaString.length;i++){
//       hasil *= Number(angkaString[i]);
//     }
//     angka = hasil;
//     return kaliTerusRekursif(angka)
//   } else {
//     return angka;
//   }
// }

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if(angka < 10){
    return angka;
  } else {
    return kaliTerusRekursif(kaliRec(angka));
  }
}


function kaliRec(num){
  var numberStr = String(num);
  if(!num) {
    return 1;
  } else {
    return Number(numberStr[0]) * kaliRec(numberStr.substring(1,numberStr.length));
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(12314)); // 6
