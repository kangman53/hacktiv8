function xo(str) {
  var counterX = 0, counterO = 0;
  var counterStr = 0;
  while(counterStr < str.length) {
    if(str[counterStr] === 'x'){
      counterX++;
    } else if(str[counterStr] === 'o'){
      counterO++;
    }
    counterStr++;
  }
  if(counterX === counterO){
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
