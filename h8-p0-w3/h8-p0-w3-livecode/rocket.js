/**
 Buatlah sebuah function drawPattern yang menerima 1 parameter berupa angka
 Angka tersebut mewakili panjang dan lebar pattern yang akan dibuat
 pada setiap baris ganjil maka kolom genapnya akan dicetak pola `/`
 pada setiap baris genap maka kolom ganjilnya dicetak pola '\'

 contoh 1:
 ----------------------------
 drawPattern(3)

 Output
 ---
  /
 \ \
  /

 contoh 2:
 ----------------------------
 drawPattern(2)
 /
\

 */


//Put your code here


//Test case
drawPattern(5)
/*
Output:
---
 / /
\ \ \
 / /
\ \ \
 / /
*/

// drawPattern(6)
/*
Output:
---
 / / /
\ \ \
 / /
\ \ \
 / / /
\ \ \
*/

// drawPattern(7)
/*
Output:
---
 / / /
\ \ \ \
 / / /
\ \ \ \
 / / /
\ \ \ \
 / / /
*/
function drawPattern(num){
  for(var i = 1; i<=num;i++){
    var newPattern = '';
    for(var j = 1; j<=num; j++){
      // if(i % 2 === 1 && j % 2 === 0){
      //   newPattern += '/'
      // } else if(i % 2 === 0 && j % 2 === 1){
      //   newPattern += "\\";
      // } else {
      //   newPattern += ' ';
      // }
      if(i % 2 === 0){
        if(j % 2 === 1){
          newPattern+='\\';
        }else{
          newPattern+= " ";
        }
      } else {
        if(j % 2 === 0){
          newPattern+='/';
        }else{
          newPattern+= " ";
        }
      }
    }
    console.log(newPattern);
  }
}
