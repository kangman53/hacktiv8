function targetTerdekat(arr) {
  // you can only write your code here!
  var awal = '', count = 0, min = 0, jarak = 0;
  var i = 0;
  while(i < arr.length) {
    if(awal === '' && arr[i] != ' ') {
      awal = arr[i];
    }
    if(awal === arr[i]) {
      count = i;
    } else if(awal != arr[i] && arr[i] != ' ') {
      jarak = i - count;
      if(min === 0) {
        min = jarak;
      } else if(jarak < min) {
        min = jarak;
      }
    }
    i++;
  }
  return min;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
