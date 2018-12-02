//WITH BUILD IN FUNCTION
function hitungJumlahKata(kalimat) {
  var newKalimat = kalimat.split(' ');
  var counter = 0;
  for(var i = 0; i<newKalimat.length;i++){
    if(newKalimat[i]){
      counter++;
    }
  }
  return counter;
}

//WITHOUT BUILD IN FUNCTION
// function hitungJumlahKata(kalimat) {
//   var counterStr = 0;
//   var counterKata = 0;
//   for(var i = 0; i < kalimat.length; i++){
//     if(kalimat[i] != ' '){
//       counterStr++;
//     } else {
//       if(counterStr > 0){
//         counterKata++;
//         counterStr =0;
//       }
//     }
//   }
//   if(counterStr > 0){
//     counterKata++;
//   }
//   return counterKata;
// }

// TEST CASES
console.log(hitungJumlahKata('I have a dream        ')); // 4
console.log(hitungJumlahKata('Never      eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
