//=====> CARA PERTAMA
// function changeVocals (str) {
//   var tempStr = '';
//   var hurufVokal = 'aieuo';
//   var hurufVokalB = hurufVokal.toUpperCase();
//   var abjadKecil = 'abcdefghijklmnopqrstuvwxyz';
//   var abjadBesar = abjadKecil.toUpperCase();
//   for(var i = 0; i<str.length; i++){
//     var tempHuruf = '';
//     for(var j = 0; j<hurufVokal.length; j++){
//       if(str[i] === hurufVokal[j]){
//         for(var k = 0; k<abjadKecil.length;k++){
//           if(hurufVokal[j] === abjadKecil[k]){
//             tempHuruf = abjadKecil[k+1];
//           }
//         }
//       } else if(str[i] === hurufVokalB[j]) {
//         for(var l = 0; l<abjadBesar.length;l++){
//           if(hurufVokalB[j] === abjadBesar[l]){
//             tempHuruf = abjadBesar[l+1];
//           }
//         }
//       }
//     }
//     if(!tempHuruf){
//       tempHuruf = str[i];
//     }
//     tempStr +=tempHuruf;
//   }
//   return tempStr;
//   //code di sini
// }
//
// function reverseWord (str) {
//   var tempStr = '';
//   for(var i = str.length-1;i >= 0; i--){
//     tempStr +=str[i];
//   }
//   return tempStr;
//   //code di sini
// }
//
// function setLowerUpperCase (str) {
//   var abjadKecil = 'abcdefghijklmnopqrstuvwxyz';
//   var abjadBesar = abjadKecil.toUpperCase();
//   var tempStr = '';
//   for(var i = 0; i < str.length; i++){
//     var tempHuruf = '';
//     for(var j = 0; j < abjadKecil.length;j++){
//       if(str[i] === abjadKecil[j]){
//         tempHuruf = abjadBesar[j];
//       } else if(str[i] === abjadBesar[j]){
//         tempHuruf = abjadKecil[j];
//       }
//     }
//
//     if(!tempHuruf) {
//        tempHuruf = str[i];
//      }
//     tempStr += tempHuruf;
//   }
//   return tempStr;
//   //code di sini
// }
//
// function removeSpaces (str) {
//   //code di sini
//   var tempStr = '';
//   for(var i = 0; i< str.length; i++){
//     if(str[i] != ' '){
//       tempStr += str[i];
//     }
//   }
//   return tempStr;
// }
//
// function passwordGenerator (name) {
//   //code di sini
//   if(name.length >= 5){
//     return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
//   } else {
//     return 'Minimal karakter yang diinputkan adalah 5 karakter';
//   }
// }

function changeVocals (str) {
  var tempStr = '';
  var hurufVokal = 'aieuo';
  var abjadKecil = 'abcdefghijklmnopqrstuvwxyz';
  for(var i = 0; i < str.length; i++){
    var isVokal = false;
    for(var j = 0; j < hurufVokal.length; j++){
      if(hurufVokal[j] === str[i] || hurufVokal[j].toUpperCase() === str[i]){
        isVokal = true;
        for(var k = 0; k < abjadKecil.length;k++){
          if(str[i] === abjadKecil[k]){
            tempStr += abjadKecil[k+1];
          } else if(str[i] === abjadKecil[k].toUpperCase()){
            tempStr += abjadKecil[k+1].toUpperCase();
          }
        }
      }
    }
    if(!isVokal){
     tempStr += str[i];
    }
  }
  return tempStr;
}

function reverseWord (str) {
  var tempStr = '';
  for(var i = str.length-1;i >= 0; i--){
    tempStr +=str[i];
  }
  return tempStr;
  //code di sini
}

function setLowerUpperCase (str) {
  var tempStr = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      tempStr += str[i].toUpperCase();
    } else {
      tempStr += str[i].toLowerCase();
    }
  }
  return tempStr;
}

function removeSpaces (str) {
  //code di sini
  var tempStr = '';
  for(var i = 0; i< str.length; i++){
    if(str[i] != ' '){
      tempStr += str[i];
    }
  }
  return tempStr;
}

function passwordGenerator (name) {
  //code di sini
  if(name.length >= 5){
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  } else {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
