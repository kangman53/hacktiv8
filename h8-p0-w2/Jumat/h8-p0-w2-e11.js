function balikKata(kata) {
  var counterKata = 0;
  var kataNew = '';
  while(counterKata < kata.length){
    kataNew = kata[counterKata] + kataNew;
    counterKata++;
  }
  return kataNew;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
