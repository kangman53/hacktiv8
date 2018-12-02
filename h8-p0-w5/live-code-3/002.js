/**

  Diberikan sebuah function sumThree dimana function ini menerima input parameter berupa
  array multidimensi.
  Function ini akan mengembalikan nilai yang menambahkan angka yang memiliki 3 digit.

  RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARANG MENGGUNAKAN built in function .map, .filter, .reduce
  - DILARANG MENGGUNAKAN REGEX

**/

/*
STORE `params` with any value
STORE `result` with 0
STORE `i` with 0
WHILE `i` less than length of array `params`
  STORE `j` with 0
  WHILE `j` less than length of array `params`[`i`]
    IF typeof `params`[`i`][`j`] equals "number" AND `params`[`i`][`j`] greater than 99 AND `params`[`i`][`j`] less than 1000
      THEN SET `result` ADD by `params`[`i`][`j`] values
    END IF
    ADD `j` by 1
  END WHILE
  ADD `i` by 1
END WHILE
RETURN `result`



*/

function sumThree(params) {
  //your code here;
  var result = 0;
  for(var i = 0; i < params.length; i++){
    for(var j = 0; j < params[i].length; j++){
      if(typeof params[i][j] == 'number' && params[i][j] > 99 && params[i][j] < 1000){
        result += params[i][j];
      }
    }
  }
  return result;
}

console.log(sumThree([ ['a', 12, 'c', 342 ], ['fox', 4000, 201, true] ])); //543
