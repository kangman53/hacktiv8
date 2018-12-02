// function meleeRangedGrouping (str) {
//   //your code here
//   result = [[],[]];
//   if(str.length >0){
//     var index;
//     var newStr = str.split(',');
//     var secondSplit = newStr[0].split('-');
//     if(secondSplit[1] === 'Ranged') {
//       index = 0;
//     } else {
//       index = 1;
//     }
//     result[index].push(secondSplit[0]);
//     newStr.splice(0,1);
//     str = newStr.join(',');
//     return meleeRangedGrouping(str);
//   } else {
//     return result;
//   }
// }

// function meleeRangedGrouping(str){
//   var result = [[],[]]
//   var newStr = str.split(',');
//   for(var i = 0; i<newStr.length;i++){
//     var newStrSplit = newStr[i].split('-');
//     if( newStrSplit[1] === 'Ranged') {
//       index = 0;
//     } else {
//       index = 1;
//     }
//     result[index].push(newStrSplit[0]);
//   }
//   if(str.length > 0){
//     return result;
//   } else {
//     return [];
//   }
// }


function meleeRangedGrouping(str){
  var objResult = new Object();
  var newStr = str.split(',');
  for(var i = 0; i < newStr.length; i++){
    var newStrSplit = newStr[i].split('-');
    if(objResult[newStrSplit[1]] === undefined){
      objResult[newStrSplit[1]] = [];
    }
    objResult[newStrSplit[1]].push(newStrSplit[0]);
  }
  return Object.values(objResult);
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
