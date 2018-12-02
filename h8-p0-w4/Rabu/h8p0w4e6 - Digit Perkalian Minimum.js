function digitPerkalianMinimum(angka) {
  var faktor = [];
  for(var i = 1; i <= angka; i++){
    if(angka % i === 0){
      faktor[faktor.length] = i.toString();
    }
  }
  var min = 0;
  for(var j = 0;j<faktor.length;j++){
    if( j === 0){
      min = faktor[j].length + faktor[faktor.length-1-j].length;
    } else if (faktor[j].length + faktor[faktor.length-1-j].length < min ){
      min = faktor[j].length + faktor[faktor.length-1-j].length;
    }
  }
  return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
