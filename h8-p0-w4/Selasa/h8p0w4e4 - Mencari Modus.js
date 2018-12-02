// WITH SORT && JIKA ADA JUMLAH TERBANYAK LEBIH DARI 1 MAKA HASILNYA -1 ---->>>> DARI MAS YOKI
// function cariModus(arr) {
//   for(var i = arr.length; i >=0;i--){
//     for(var j = 0; j<=i;j++){
//       if(arr[j-1] > arr[j]){
//         var temp = arr[j-1];
//         arr[j-1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   var check = false;
//   var result = '';
//   var awal = '';
//   var counter = 0;
//   var max = 0;
//   for(var k = 0; k <arr.length;k++){
//     if(awal === ''){
//       awal = arr[k];
//     }
//
//     if(awal != arr[k]) {
//       check = true;
//       awal = arr[k];
//       counter = 0;
//       counter++;
//     } else {
//       counter++;
//     }
//
//
//     if(counter > max){
//       max = counter;
//       result = arr[k];
//     } else if(counter === max){
//       result = -1;
//     }
//   }
//   if(max === 1 || check === false) {
//     result = -1;
//   }
//   return result;
// }

// WITHOUT SORT && JUMLAH TERBANYAK PERTAMA YANG KELUAR
// function cariModus(arr) {
//   var max = 0;
//   var error = true;
//   var hasil = 0;
//   for(var i = 0; i< arr.length;i++){
//     var count = 0;
//     for(var j = 0; j < arr.length;j++){
//       if(arr[i] === arr[j]){
//         count++;
//       } else {
//         error = false;
//       }
//     }
//     if(count > max){
//       max = count;
//       hasil = arr[i];
//     }
//   }
//   if(max < 2 || error === true){
//     return -1;
//   } else{
//     return hasil;
//   }
// }

function cariModus(arr){
  var unikArr = [];
  for(var i = 0; i<arr.length;i++){
    var isCheck = false;
    for(var j = 0; j<unikArr.length;j++){
      if(arr[i] === unikArr[j][0]){
        isCheck = true;
      }
    }
    if(!isCheck){
      var tampungUnik = [];
      tampungUnik[tampungUnik.length]= arr[i];
      var counterModus = 0;
      for(var k = 0; k<arr.length;k++){
        if(arr[i] === arr[k]){
          counterModus++;
        }
      }
      tampungUnik[tampungUnik.length] = counterModus;
      unikArr[unikArr.length] = tampungUnik;
    }
  }
  var result = 0;
  var isCheck = false;
  if(unikArr.length > 1) {
    var max = 0;
    for(var l = 0; l < unikArr.length; l++){
      if(l === 0){
        max = unikArr[l][1];
        result = unikArr[l][0];
      }else if(unikArr[l][1] > max) {
        max = unikArr[l][1];
        result = unikArr[l][0];
        isCheck = true;
      } else if (unikArr[l][1] < max){
        isCheck = true;
      }
    }
    if(!isCheck){
      result = -1;
    }
  } else {
    result = -1;
  }
  return result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([1, 1, 2, 2, 3, 3])); //-1s
