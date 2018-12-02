function pasanganTerbesar(num) {
  // you can only write your code here!
  var numStr = String(num);
  var max = 0;
  for(var i = 0; i < numStr.length;i++){
    if(numStr[i]+numStr[i+1] > max){
      max = numStr[i]+numStr[i+1];
    }
  }
  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
