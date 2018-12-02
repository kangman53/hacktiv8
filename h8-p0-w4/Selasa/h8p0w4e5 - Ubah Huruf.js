function ubahHuruf(kata) {
  // you can only write your code here!
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var tempKata = '';
  for(var i = 0; i<kata.length; i++){
    for(var j = 0; j<abjad.length; j++){
      if(kata[i] === abjad[abjad.length-1]){
        tempKata += abjad[0];
      } else if(kata[i]===abjad[j]){
        tempKata += abjad[j+1];
      }
    }
  }
  return tempKata;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
