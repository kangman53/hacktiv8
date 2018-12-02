/**
  Diberikan sebuah function findPair yang menerima sebuah array multidimensi.
  Function ini akan menghasilkan jumlah pasangan yang terdapat pada array multidimensi tersebut.

  NOTE: value yang telah mendapatkan pasangan tidak boleh dipasangkan lagi dengan yang lainnya

  Contoh:
  input:

  [
    ['a', 'b', 'c'],
    ['d', 'a', 'z'],
    ['a', 'z', 'f']
  ]

  output:
    2

  penjelasan: karena terdapat a dan a, kemudian z dan z


  contoh 2:
  input:
  [
    [2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6]
  ]

  output:
    10

  penjelasan:
  - pair pertama: 2 dan 2
  - pair ke-2: 2 dan 2
  - pair ke-3: 3 dan 3
  - pair ke-4: 3 dan 3
  - pair ke-5: 4 dan 4
  .
  .
  .
  .dst

**/
//MENCARI PAIR MASING - MASING
function findPair(array) {
  //your code here
  var counterPair = 0;
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){
      for(var k = 0; k < array.length; k++){
        for(var l = 0; l < array[k].length; l++){
          if(i+''+j !== k+''+l && array[i][j] !== undefined && array[i][j] === array[k][l]){
            counterPair++;
            array[i][j] = undefined;
            array[k][l] = undefined;
          }
        }
      }
    }
  }
  return counterPair;
}

// MENGGUNAKAN OBJECT
// function findPair(array) {
//   //your code here
//   var counterPair = 0;
//   var objPair = new Object();
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array[i].length; j++) {
//       if (objPair[array[i][j]] === undefined) {
//         objPair[array[i][j]] = 0;
//       }
//       objPair[array[i][j]]++;
//     }
//   }
//
//   for (var isi in objPair) {
//     counterPair += Math.floor(objPair[isi] / 2);
//   }
//   return counterPair;
// }

console.log(findPair([
  ['a', 'b', 'c'],
  ['d', 'a', 'z'],
  ['a', 'z', 'f']
])); //2



console.log(findPair([
  [2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6]
])); //10
