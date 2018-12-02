var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
function dataHandling(input){
  var descArr = ['Nomor ID : ', 'Nama : ', 'TTL : ', '', 'Hobi : '];
  var counterArr = 0;
  var result = '';
  while(counterArr < input.length){
      for(var i = 0; i< input[counterArr].length; i++){
        if(i === 2){
          result += descArr[i];
          result += input[counterArr][i];
          result += ' ';
        } else if(i === 3){
          result += input[counterArr][i]+'\n';
        } else {
          result += descArr[i];
          result += input[counterArr][i]+'\n';
        }
      }
    counterArr++;
    result += '\n';
  }
  return result;
}

console.log(dataHandling(input));
