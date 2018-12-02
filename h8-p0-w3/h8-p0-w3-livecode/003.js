/**
 Membership ID

 Active8 gym memiliki sistem membership untuk setiap pelanggan di haruskan mengisi nama, tanggal lahir, dan diberikan nomor antrian
 dari ketiga data tersebut maka akan dibuatkan ID Member dengan format sebagai berikut

 Huruf Pertama Pelanggan + Dua Digit Tanggal Lahir  + Dua Digit Bulan Lahir + Dua Digit akhir tahun lahir + tiga digit nomor antrian

 Buatlah sebuah function yang menghasilkan id member tersebut



 Contoh 1:
 -----------------------------
 genetareMemberID("Alfian", "22091999", 121)
 output
 ---
 a220999121

 Contoh 2:
 -----------------------------
 genetareMemberID("budi", "09022000", 1)
 output
 ---
 b090200001

 */

 function genetareMemberID(nama, tanggal, antrian){
   var result = '';
   result+=nama[0].toLowerCase();
   result+=tanggal[0]+tanggal[1]+tanggal[2]+tanggal[3]+tanggal[6]+tanggal[7];
   if(antrian < 10){
     result += '00' + antrian;
   }else if(antrian < 100){
     result += '0' + antrian;
   } else{
     result += antrian;
   }
   console.log (result);
 }
 genetareMemberID("Alfian", "22091999", 121)
 genetareMemberID("budi", "09022000", 12)
