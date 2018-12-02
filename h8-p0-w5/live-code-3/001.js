// Competencies: Pseudocode / Algoritma problem solving
/*
==============
Merry Christmas!
==============
Instruksi
=========
Sinterklas akan membagikan banyak hadiah natal tahun ini dengan menempatkan hadiah natal secara acak.
Tugas seorang anak adalah mencari hadiah-hadiah natal yang disembunyikan oleh sinterklas.
Oops, tetapi hal ini diketahui oleh Pit Hitam dan Nenek Penyihir mereka tidak senang dengan hal tersebut
sehingga mereka akan menakut-nakuti anak yang kebetulan lewat di depan mereka.

Tiap anak yang ditakut-takuti oleh Pit Hitam dan Nenek Penyihir sebanyak 3 kali akan berlari pulang karena takut.

Buatlah sebuah function merryChristmas yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - 'Pit Hitam' adalah tempat di mana Pit Hitam berada dan akan menakuti anak-anak
 - 'Nenek Penyihir' adalah tempat di mana Nenek Penyihir berada dan akan menakuti anak-anak
 - 'Hadiah' adalah hadiah natal yang sinterklas berikan
 - '*' adalah jalanan biasa
Dimana function ini akan mengembalikan berapa banyak hadiah natal yang berhasil didapatkan
Contoh
-------
1. inputan: ['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']
   output: Yeaaayyy, you got all presents: 2
2. inputan: ['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']
   output: Be brave, next time! But it's okay, you got 2 present(s)

RULES
-----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/

/*
PSEUDOCODE
-------------
STORE `path` with any value
STORE `counterHadiah` with value 0
STORE `counterPN` with value 0
STORE `i` with value 0
WHILE `i` less than length of `path`
  IF `path`['i'] equals "Pit Hitam" || `path`[`i`] equals "Nenek Penyihir"
    THEN ADD `counterPN` by 1
    IF `counterPN` equals 3
      THEN RETURN "Be brave, next time! But it's okay, you got " + counterHadiah + " present(s)"
    END IF
  ELSE IF `path`['i'] equals "Hadiah"
    THEN ADD `counterHadiah` by 1
  END IF
  ADD `i` by 1
END WHILE
RETURN 'Yeaaayyy, you got all presents: ' + counterHadiah




*/

function merryChristmas(path) {
  //your code here
  var counterHadiah = 0;
  var counterPN = 0;
  for(var i = 0; i < path.length; i++){
    if(path[i] === 'Pit Hitam' || path[i] === 'Nenek Penyihir'){
      counterPN++;
      if(counterPN === 3){
        return "Be brave, next time! But it's okay, you got " + counterHadiah + " present(s)";
      }
    } else if(path[i] === 'Hadiah'){
      counterHadiah++;
    }
  }
  return 'Yeaaayyy, you got all presents: ' + counterHadiah;
}

console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']));
console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']));
