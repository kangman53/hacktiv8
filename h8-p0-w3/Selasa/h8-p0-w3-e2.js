function balikString(string){
  var counterString = string.length;
  var newString = '';
  while(counterString > 0){
    counterString--;
    newString+=string[counterString];
  }
  return newString;
}
console.log(balikString('hello world!'))
