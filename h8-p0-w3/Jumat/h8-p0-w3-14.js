function mengelompokkanAngka(arr) {
  // you can only write your code here!
  hasil = [[],[],[]];
  var i = 0;
  while (i < arr.length){
    if(arr[i] % 3 === 0) {
      hasil[2][hasil[2].length] = arr[i];
    }else if(arr[i] % 2 === 0) {
      hasil[0][hasil[0].length] = arr[i];
    } else {
      hasil[1][hasil[1].length] = arr[i];
    }
    i++;
  }
  return hasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
