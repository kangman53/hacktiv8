// function tentukanDeretAritmatika(arr) {
//   var counter = 0;
//   var beda = arr[0]-arr[1];
//   for(var i = 0; i<arr.length-1; i++){
//     if(arr[i] - arr[i+1] != beda){
//       counter++;
//     }
//   }
//   return (counter === 0);
//   // you can only write your code here!
// }

// LANGSUNG RETURN
function tentukanDeretAritmatika(arr) {
  for(var i = 0; i < arr.length-2; i++){
    if(arr[i+1] - arr[i] != arr[i+2] - arr[i+1]){
      return false;
    }
  }
  return true;
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
