function angkaPalindrome(num) {
  // you can only write your code here!
  var newNum = num;
  while (true){
    newNum++;
    var stringNum = String(newNum);
    var counterNewNum = stringNum.length;
    var tmpNewNum = '';
    while(counterNewNum > 0){
      counterNewNum--;
      tmpNewNum += stringNum[counterNewNum];
    }
    if(tmpNewNum == newNum){
      return newNum;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
