function groupAnimals(animals) {
  var hewanK = [];
  var hewanB = [];
  var temp = '';

  for(var i = animals.length-1; i >= 0; i--){
    for(var j = 1; j <= i; j++){
      if(animals[j-1][0] > animals[j][0]){
        temp = animals[j-1];
        animals[j-1] = animals[j];
        animals[j] = temp;
      }
    }
  }

  var awal = '';

  for(var k = 0; k < animals.length; k++){
    if(awal === animals[k][0]){
      hewanK.push(animals[k]);
    } else {
      if(k > 0){
        hewanB.push(hewanK);
        hewanK = [];
        hewanK.push(animals[k])
        awal = animals[k][0];
      } else {
        hewanK.push(animals[k]);
        awal = animals[k][0];
      }
    }
    if(animals.length-1 === k){
      hewanB.push(hewanK);
    }
  }
  return hewanB;
}


// function groupAnimals(animals) {
//   var hewanK = [];
//   var hewanB = [];
//   var temp = '';
//
//   for(var i = animals.length-1; i >= 0; i--){
//     for(var j = 1; j <= i; j++){
//       if(animals[j-1][0] > animals[j][0]){
//         temp = animals[j-1];
//         animals[j-1] = animals[j];
//         animals[j] = temp;
//       }
//     }
//   }
//
//   var awal = animals[0][0];
//
//   for(var k = 0; k < animals.length; k++){
//     if(awal === animals[k][0] ){
//       hewanK.push(animals[k]);
//     } else {
//       hewanB.push(hewanK);
//       hewanK = [];
//       hewanK.push(animals[k])
//       awal = animals[k][0];
//     }
//   }
//   hewanB.push(hewanK);
//   return hewanB;
// }
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
