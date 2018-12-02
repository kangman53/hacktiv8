function shoppingTime(memberId, money) {
  var myBarang  = {
    barang : [ 'Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone' ],
    harga : ['1500000', '500000', '250000', '175000', '50000']
  };

  if(!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if( money < myBarang.harga[myBarang.harga.length-1]){
    return 'Mohon maaf, uang tidak cukup';
  } else {
    var myResult = new Object();
    myResult.memberId = memberId;
    myResult.money = money;
    myResult.listPurchased = []
    for(var i = 0;i < myBarang.barang.length; i++){
      if(money >= myBarang.harga[i]){
        money -= myBarang.harga[i];
        myResult.listPurchased[myResult.listPurchased.length] = myBarang.barang[i];
      }
    }
    myResult.changeMoney = money;
    return myResult;
  }

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
