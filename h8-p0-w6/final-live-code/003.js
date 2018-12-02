/*
========================================
Array Mastery: The Most Favorite Actor
========================================

Function mostFavoriteActor adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah value di dalam array tersebut.

Function akan mereturn nilai berupa string dengan pola:
=> actor(jumlahVoting), actor(jumlahVoting), actor(jumlahVoting).
Kemudian, setiap actor yang ditampilkan harus berurut dari jumlah voting terbesar ke terkecil
[CONTOH]
input: ['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Minho']));
output: 'Lee Min Ho(3), Lee Kwang So(2) , Rain(1)'

RULES:
 - DILARANG menggunakan function ES6 SET
 - DILARANG menggunakan built in function .map, .filter dan .reduce
*/

function mostFavoriteActor(arr){
	// Code hanya disini
  var myResult = '';
  var keyName = [];
  var countName = [];
  for(var i = 0; i < arr.length; i++){
    var isDouble = false;
    for(var j = 0; j < keyName.length; j++){
      if(arr[i].toLowerCase() === keyName[j].toLowerCase()){
        isDouble = true;
        countName[j]++;
      }
    }
    if(!isDouble){
      keyName.push(arr[i]);
      countName.push(1);
    }
  }

  for(var k = keyName.length - 1; k >=0; k--){
    for(var l = 1; l <= k; l++){
      if(countName[l-1] < countName[l]){
        var keySwap = keyName[l-1];
        keyName[l-1] = keyName[l];
        keyName[l] = keySwap;
        var countSwap = countName[l-1];
        countName[l-1] = countName[l];
        countName[l] = countSwap;
      }
    }
  }
  for(var m = 0; m < keyName.length; m++){
    myResult += `${keyName[m]}(${countName[m]})`;
    if(m != keyName.length - 1){
      myResult += ', ';
    }
  }
  return myResult;
}

console.log(mostFavoriteActor(['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Min ho']));
//'Lee Min Ho(4), Lee Kwang So(2) , Rain(1)'

console.log(mostFavoriteActor(['Cha Tae Hyun', 'Ha Jung Wo', 'Cha Tae Hyun', 'Ju Ji Hoon']));
// 'Cha Tae Hyun(2), Ha Jung Wo(1), Ju Ji Hoon(1)'
