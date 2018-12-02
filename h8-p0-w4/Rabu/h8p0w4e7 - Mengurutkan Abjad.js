
function  urutkanAbjad(str) {
  var tempStr = []
  for(var i = 0; i<str.length;i++){
    tempStr[tempStr.length] = str[i];
  }
  for(var j = tempStr.length-1; j >=0; j--){
    for(var k = 1; k<=j; k++){
      if(tempStr[k-1] > tempStr[k]){
        var tempSwap = tempStr[k-1];
        tempStr[k-1] = tempStr[k];
        tempStr[k] = tempSwap;
      }
    }
  }
  var result = '';
  for(var l = 0; l< tempStr.length;l++){
    result+=tempStr[l];
  }
  return result;
  // you can only write your code here!
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
