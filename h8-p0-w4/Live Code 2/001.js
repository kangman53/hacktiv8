/**
 Hapus Angka
 -------------------------
 Diberikan sebuah function hapusAngka dimana function tersebut menerima input parameter berupa string.
 function tersebut akan membuang seluruh karakter berupa angka yang terdapat pada kata tersebut

 contoh:

 input: 'hacktiv8'
 output: 'hacktiv'

 input: '17 Agustus 1945'
 output: 'Agustus'

 RULES:
  - WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
  - DILARANG MENGGUNAKAN method .split()
 */

 /*
ALGORITMA
===================
1. Simpan `kamus` dengan nilai 'abcdefghijklmnopqrstuvwxyz'.
2. Simpan `result` tanpa diberikan nilai.
3. Simpan `i` dengan nilai 0.
4. Jika `i` kurang dari panjang `sentence`, lakukan langkah 5 sampai dengan 8 . Jika tidak lakukan langkah ke 9.
5. Simpan `j` dengan nilai 0.
6. Jika `j` kurang dari panjang `kamus`, lakukan langkah 7 sampai dengan 8. Jika tidak lakukan langkah 4.
7. Jika `sentence` index ke `i` sama dengan `kamus` index ke `j` ATAU `sentence` index ke `i` sama dengan `kamus` index ke `j` yang di kapitalkan.      Lakukan langkah 8.
8. Simpan `result` dengan value `result` ditambah `sentence` index ke `j`.
9. Jika perulangan 4 selesai dilakukan, kembalikan nilai `result`.


 */

 // function hapusAngka(sentence) {
 //   var kamus = 'abcdefghijklmnopqrstuvwxyz';
 //   var result = '';
 //   for(var i = 0; i < sentence.length; i++){
 //     for(var j = 0; j < kamus.length; j++){
 //       if(sentence[i] === kamus[j] || sentence[i] === kamus[j].toUpperCase()){
 //         result = result + sentence[i];
 //       }
 //     }
 //   }
 //   return result;
 // }

 // function hapusAngka(sentence) {
 //   var angka = '0123456789';
 //   var result = '';
 //   for(var i = 0; i < sentence.length; i++){
 //     var isAngka = false;
 //     for(j = 0; j < angka.length; j++){
 //       if(sentence[i] === angka[j] || sentence[i] === ' '){
 //         isAngka = true;
 //       }
 //     }
 //     if(!isAngka){
 //       result = result + sentence[i];
 //     }
 //   }
 //   return result;
 // }

 function hapusAngka(sentence) {
   var result = '';
   for(var i = 0; i < sentence.length; i++){
     if(isNaN(sentence[i])){
       result += sentence[i];
     }
   }
   return result;
 }

 console.log(hapusAngka('hacktiv8')); //hacktiv
 console.log(hapusAngka('17 Agustus 1945')); //Agustus
 console.log(hapusAngka('')); //''
