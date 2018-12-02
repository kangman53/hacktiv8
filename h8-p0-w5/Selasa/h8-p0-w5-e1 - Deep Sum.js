// function deepSum (arr) {
//   var hasil = 0;
//   if(arr.length === 0) {
//     return 0;
//   } else {
//     for(var i = 0; i < arr[0].length;i++){
//       for(var j = 0; j < arr[0][i].length;j++){
//         hasil += arr[0][i][j];
//       }
//     }
//     arr.splice(0,1);
//     return hasil + deepSum(arr);
//   }
// }
function deepSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      sum += deepSum(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number
