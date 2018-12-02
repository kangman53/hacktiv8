/*
=======================
UNIQUE DUPLICATE FINDER
=======================

[INSTRUCTIONS]
uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
output: {
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}

*/


function uniqueDuplicateFinder(sentence) {
  // only code here!
  var arrSentence = sentence.split(' ');
  if(!sentence){
    arrSentence = [];
  }
  var objSentence = new Object();
  var objResult = new Object();
  objResult.unique = [];
  objResult.duplicate = [];
  for(var i = 0; i < arrSentence.length; i++){
    if(!objSentence[arrSentence[i].toLowerCase()]){
      objSentence[arrSentence[i].toLowerCase()] = 0;
    }
    objSentence[arrSentence[i].toLowerCase()]++;
  }
  for(var isi in objSentence){
    if(objSentence[isi] === 1){
      objResult.unique.push(isi);
    } else {
      objResult.duplicate.push(isi);
    }
  }
  return objResult;

}

console.log(uniqueDuplicateFinder('hello black dragon and hello red dragon'));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
// {
//   unique: [ 'hlloe' ],
//   duplicate: [ 'hello' ]
// }

console.log(uniqueDuplicateFinder('john is coding')); // ['john', 'is', 'coding', 'and', 'he']
// {
//   unique: [ 'john', 'is', 'coding' ],
//   duplicate: []
// }

console.log(uniqueDuplicateFinder('blue blue red blue violet red violet'));
// {
//   unique: [],
//   duplicate: [ 'blue', 'red', 'violet']
// }

console.log(uniqueDuplicateFinder(''));
// {
//   unique: [],
//   duplicate: []
// }
