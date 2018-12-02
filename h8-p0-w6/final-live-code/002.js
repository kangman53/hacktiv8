/**
Count Missing Numbers
-------------------
Implementasikan function `countMissingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: 4 angka hilang
    karena angka yang tidak ada adalah 3, 5, 6 dan 7
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: 1
    karane angka yang tidak ada adalah 4
  - Input: [4, 2, 3, 1]
    Output: tidak ada angka hilang

  Dilarang menggunakan built-in function:
  - max()
  - min()
  - sort()
*/

function countMissingNumbers (numbers) {
  // Code disini
  if(!numbers.length){
    return 'data tidak bisa diproses';
  }
  var myResult = ' angka hilang'
  var counterMissing = 0;
  var minNum = '';
  var maxNum = 0;
  for(var i = 0 ; i < numbers.length; i++){
    if(minNum === ''){
      minNum = numbers[i];
    } else if(numbers[i] < minNum){
      minNum = numbers[i];
    }

    if(numbers[i] > maxNum){
      maxNum = numbers[i];
    }
  }

  for(var j = minNum; j <= maxNum; j++){
    if(numbers.indexOf(j) === -1 ){
      counterMissing++;
    }
  }
  if(counterMissing === 0){
    myResult = 'tidak ada' + myResult;
  } else {
    myResult = counterMissing + myResult;
  }
  return myResult;
}

console.log(countMissingNumbers([1, 5, 10, 7, 6])); // 5 angka hilang
console.log(countMissingNumbers([10, 1])); // 8 angka hilang
console.log(countMissingNumbers([90, 92, 91])); // tidak ada angka hilang
console.log(countMissingNumbers([61, 54, 50])); // 9 angka hilang
console.log(countMissingNumbers([])); // data tidak bisa diproses
