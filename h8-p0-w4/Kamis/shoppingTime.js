function shoppingTime(memberId, money) {
  var myBarang  = {
    barang : [ 'Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone' ],
    harga : ['1500000', '500000', '250000', '175000', '50000']
  };
  if(!memberId){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if(money < myBarang.harga[myBarang.harga.length-1]){
    return 'Mohon maaf, uang tidak cukup';
  } else {
    var objResult = new Object();
    objResult.memberId = memberId;
    objResult.money = money;
    objResult.listPurchased = [];
    for(var i = 0; i < myBarang.barang.length; i++){
      if(money >= myBarang.harga[i]){
        objResult.listPurchased.push(myBarang.barang[i]);
        money -= myBarang.harga[i];
      }
    }
    objResult.changeMoney = money;
  }
  return objResult;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
