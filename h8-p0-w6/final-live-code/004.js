/**
  Diberikan sebuah function drawTrack yang menerima 2 parameter:
  - players bertipe array multi dimensi dimana array tersebut berisi info:
    * nama player
    * posisi player
  - lengthOfTrack bertipe number dimana ini mewakilkan panjang lintasan

  Jika posisi player melebihi panjang lintasan, maka player akan ditempatkan pada
  garis finish(posisi lintasan terakhir)

  Asumsi posisi tidak pernah 0 dan angka negatif.

  Contoh hasil output bisa dilihat pada test case/driver code
**/

function drawTrack(players, lengthOfTrack) {
  //your code here
  var myResult = [];
  var isCheck = false;
  for(var i = 0; i < players.length; i++){
    var newColumn = [];
    for(var j = 1; j <= lengthOfTrack; j++){
      if(j === players[i][1]){
        newColumn.push(players[i][0]);
        isCheck = true;
      } else {
        if(!isCheck && j === lengthOfTrack){
          newColumn.push(players[i][0]);
        } else {
          newColumn.push('');
        }
      }
    }
    myResult.push(newColumn);
  }
  return myResult;
}

console.log(drawTrack([
  ['Lee Minho', 5],
  ['Song Joong Ki', 7]
], 15));

// [ [ '', '', '', '', 'Lee Minho', '', '', '', '', '', '', '', '', '', '' ],
//   [ '', '', '', '', '', '', 'Song Joong Ki', '', '', '', '', '', '', '', '' ] ]

console.log(drawTrack([
  ['Xavier Fox', 12],
  ['Young Fox', 11],
  ['Zen Fox', 8]
], 9));

// [ [ '', '', '', '', '', '', '', '', 'Xavier Fox' ],
//   [ '', '', '', '', '', '', '', '', 'Young Fox' ],
//   [ '', '', '', '', '', '', '', 'Zen Fox', '' ] ]
