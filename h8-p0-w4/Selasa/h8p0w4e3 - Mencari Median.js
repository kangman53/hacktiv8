// WITH SORT
function cariMedian(arr) {
  // you can only write your code here!
  var nilaiTengah = 0;
  var result = 0;
  for(var i = arr.length-1; i >=0; i--){
    for(var j = 1; j<=i; j++){
      if(arr[j-1]>arr[j]){
        var temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  if(arr.length % 2 === 0){
    nilaiTengah = arr.length / 2
    result = (arr[nilaiTengah] + arr[nilaiTengah-1]) / 2;
  } else {
    nilaiTengah = (arr.length-1) / 2
    result = arr[nilaiTengah];
  }
  return result;
}

// WITHOUT SORT
// function cariMedian(arr) {
//   if(arr.length % 2 === 0){
//     return (arr[arr.length/2] + arr[(arr.length/2)-1])/2;
//   } else {
//     return arr[(arr.length-1)/2];
//   }
// }

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
