// MENGGUNAKAN SORT DAN MENGHITUNG JUMLAH KARAKTER YANG SAMA
function hitungHuruf(kata) {
  // you can only write your code here!
  var newKata = [];
  var tempKata = '';
  for(var i = 0; i < kata.length; i++){
    if(kata[i] != ' '){
      tempKata+=kata[i];
      if(i === kata.length-1){
        newKata[newKata.length] = tempKata;
      }
    } else {
      if(tempKata){
        newKata[newKata.length] = tempKata;
      }
      tempKata='';
    }
  }

  var max = 0;
  newKataSplit = newKata.slice(0);
  for(var j = 0; j<newKataSplit.length; j++){
    var newKataStr = [];
    for(var k = 0; k<newKataSplit[j].length;k++){
      newKataStr[newKataStr.length] = newKataSplit[j][k];
    }
    newKataSplit[j] = newKataStr;
    for(var l = newKataStr.length-1; l >=0; l--){
      for(var m = 1; m<=l;m++){
        if(newKataStr[m-1] > newKataStr[m]){
          var tmpKataStr = newKataStr[m-1];
          newKataStr[m-1] = newKataStr[m];
          newKataStr[m] = tmpKataStr;
        }
      }
    }

    var awal = '';
    var counterStr = 0, counterFinal = 0;
    for(var n = 0; n < newKataSplit[j].length; n++){
      if(awal != newKataSplit[j][n]){
        if(counterStr > 1){
          counterFinal++;
        }
        counterStr = 0;
        awal = newKataSplit[j][n];
        counterStr++;
      } else {
        counterStr++;
      }
    }
    if(counterFinal > max){
      max = counterFinal;
      result = newKata[j];
    }
  }
  return result;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developeeeeer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
