function totalDigitRekursif(angka) {
  var angkaString = String(angka);
  if(angka > 0) {
    return Number(angkaString[0]) + totalDigitRekursif(angkaString.slice(1));
  } else {
    return 0;
  }
  // return pengurang;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
