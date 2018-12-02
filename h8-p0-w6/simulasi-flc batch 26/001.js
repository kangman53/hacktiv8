/*
  Halang Rintang

  Diberikan sebuah function halangRintang yang menerima 2 parameter yaitu:
   - parameter pertama adalah string menggambarkan arena perlombaan dimana symbol `_` menandakan arena datar
     dan symbol `n` menandakan rintangan.
   - parameter kedua adalah number daya lompat kuda yang menentukan berapa banyak rintangan yang dapat dilewati
     dalam sekali lompat

  function ini akan mengembalikan jarak yang dapat di tempuh oleh kuda tersebut sebelum akhirnya menabrak rintangan

  example:
  halangRintang('__n__nn__nnn__n', 2)

  proses:
  karakter ke-1 dan 2 adalah arena datar sehingga dapat dilewati
  karakter ke-3 terdapat satu rintangan sehingga dapat dilewati
  karakter ke-4 dan 5 adalah arena datar sehingga dapat dilewati
  karakter ke-6 dan 7 terdapat dua rintangan sehinga dapat dilewati
  karakter ke-8 dan 9 adalah arena datar sehingga dapat dilewati
  karakter ke-10 sampai 11 terdapat 3 rintangan sedangkan daya lompat hanya 2 sehingga tidak dapat dilewati dan berhenti di 9

  output:
  9

  RULES:
  - WAJIB menyertakan algorithm/pseudocode
  - DILARANG menggunakan built in function .split(), .slice(), .indexOf()
  - DILARANG menggunakan regex

*/
/*
PSEUDOCODE
-----------------------------------------
STORE `arena` with any value
STORE `dayaLompat` with any value
STORE `counterLompat` without value
STORE `result` with without value
STORE `i` with 0
WHILE `i` less than length of `arena`
  IF `arena`[`i`] equals "n"
    IF `counterLompat` equals 0
      SET `result` with `i` value
    END IF
    ADD `counterLompat` by 1
    IF `counterLompat` greater than `dayaLompat`
      RETURN `result`
    ELSE
      set `counterLompat` with 0;
    END IF
  END IF
END OF WHILE
RETURN `arena`.length --------- >jika lolos sampai terakhir;

*/
// PAKAI INDEX
// function halangRintang(arena, dayaLompat) {
//   // you can only write your code here!
//   var counterLompat = 0;
//   var result = 0;
//   for (var i = 0; i < arena.length; i++) {
//     if (arena[i] === 'n') {
//       if (counterLompat === 0) {
//         result = i;
//       }
//       counterLompat++;
//       if (counterLompat > dayaLompat) {
//         return result;
//       }
//     } else {
//       counterLompat = 0;
//     }
//   }
//   return arena.length;
// }



//PAKAI COUNTER
function halangRintang(arena, dayaLompat){
  var counterLompat = 0;
  var counterResult = 0;
  for(var i = 0; i < arena.length; i++){
    counterResult++;
    if(arena[i] === 'n'){
      counterLompat++;
      if(counterLompat > dayaLompat){
        return counterResult - counterLompat;
      }
    } else {
      counterLompat = 0;
    }
  }
  return counterResult;
}

// TEST CASES
console.log(halangRintang('___n__nn', 1)); // 6
console.log(halangRintang('___n__nn_nnn', 2)); // 9
console.log(halangRintang('_nnnnn___', 1)); // 1
console.log(halangRintang('____nnnn__nnnnn', 4)); // 10
console.log(halangRintang('nnnnn____', 4)); // 0
