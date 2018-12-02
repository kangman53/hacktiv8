// function naikAngkot(arrPenumpang) {
//   var result = [];
//   if(arrPenumpang.length > 0){
//     var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
//     var objResult = new Object();
//     objResult.penumpang = arrPenumpang[0][0];
//     objResult.naikDari = arrPenumpang[0][1];
//     objResult.tujuan = arrPenumpang[0][2];
//     for(var i = 0; i < rute.length; i++){
//       if(arrPenumpang[0][1] === rute[i]){
//         var naikDari = i;
//       } else if(arrPenumpang[0][2] === rute[i]){
//         var tujuan = i;
//       }
//     }
//     objResult.bayar = (tujuan - naikDari) * 2000;
//     result.push(objResult);
//     arrPenumpang.splice(0,1);
//     return result + naikAngkot(arrPenumpang);
//   } else {
//     return [];
//   }
// }


function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result = [];
  for(var i = 0; i < arrPenumpang.length;i++){
    var objResult = new Object;
    for(var j = 0; j < rute.length;j++){
      if(arrPenumpang[i][1] === rute[j]){
        var indexNaik = j;
      } else if(arrPenumpang[i][2] === rute[j]){
        var indexTurun = j;
      }
    }
      objResult.penumpang = arrPenumpang[i][0];
      objResult.naikDari = arrPenumpang[i][1];
      objResult.tujuan = arrPenumpang[i][2];
      objResult.bayar = Math.abs(indexTurun - indexNaik) * 2000;
      result.push(objResult);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
