// function deleteArray(){
//   var myBarang  = {
//     barang : [ 'Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone' ],
//     harga : ['1500000', '500000', '250000', '175000', '50000']
//   };
//
//   var myBarangKeys = Object.keys(myBarang);
//   var myBarangValue = Object.values(myBarang);
//   return myBarangValue;
// }
//
// console.log(deleteArray());
//
//
// Array.isArray ====> mendeteksi Array


var StudentsMorning = ['Adi', 'Budi', 'Cici', 'Didi', 'Mahdi', 'Joni'];
var StudentsEvening = ['Adi', 'Budi', 'Cici', 'Dimdi', 'Eci'];

// var objStudents = {};
// for(var i = 0; i < StudentsEvening.length; i++){
//   objStudents[StudentsMorning[i]] = 1;
//   objStudents[StudentsEvening[i]] = 1;
// }

// for(var i = 0; i < StudentsEvening.length; i++){
//   var isDouble = false;
//   for(var j = 0; j < StudentsMorning.length; j++){
//     if(StudentsMorning[j] === StudentsEvening[i]){
//       isDouble = true;
//     }
//   }
//   if(!isDouble){
//     StudentsMorning.push(StudentsEvening[i]);
//   }
// }
var dataTerpanjang = 0;
if(StudentsMorning.length > StudentsEvening.length){
  dataTerpanjang = StudentsMorning.length;
} else {
  dataTerpanjang = StudentsEvening.length;
}
var objStudents = new Object();
for(var i = 0; i < dataTerpanjang; i++){
  if(StudentsEvening[i] != undefined){
    objStudents[StudentsEvening[i]] = i;
  }
  if(StudentsMorning[i] != undefined){
    objStudents[StudentsMorning[i]] = i;
  }
}
// console.log(StudentsMorning);
console.log(Object.keys(objStudents));
