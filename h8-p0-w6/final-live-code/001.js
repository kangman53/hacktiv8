/**
  Diberikan sebuah function bernama findRowPrime
  Function tersebut akan menerima sebuah parameter number.
  Function akan me-return deret prima ke berapa parameter tersebut (asumsi input
  parameter pasti bilangan prima)

  RULES
  -----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

**/


/*
PSEUDOCODE
----------------
STORE `n` with any value
STORE `counterResult` without value
STORE `angka` with 2
STORE `counterPrime` without value

WHILE TRUE
  SET `counterPrime` with 0
  STORE `i` with 1
  WHILE `i` less then equals `angka`
    IF `angka` modulo `i` equals 0
      ADD `counterPrime` by 1
    END IF
  END OF WHILE
  IF `counterPrime` equals 2
    ADD `counterResult` by 1
    IF `angka` equals `n`
      RETURN `counterResult`
    END IF
  END IF
  ADD `angka` by 1
END OF WHILE
*/

function findRowPrime(n){
  //write your code here
  var counterResult = 0;
  var angka = 2;
  var counterPrime = 0;
  while(true){
    counterPrime = 0;
    for(var i = 1; i <= angka; i++){
      if(angka % i === 0){
        counterPrime++;
      }
    }
    if(counterPrime === 2){
      counterResult++;
      if(angka === n){
        return counterResult;
      }
    }
    angka++;
  }
}

console.log(findRowPrime(7)); //4
console.log(findRowPrime(229)); //50
console.log(findRowPrime(37)); //12
