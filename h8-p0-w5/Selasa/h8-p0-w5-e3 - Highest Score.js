// function highestScore (students) {
//   var myResult = new Object();
//   for(var i = 0; i<students.length; i++){
//     myResult[students[i].class] = new Object();
//     myResult[students[i].class]['name'] = '';
//     myResult[students[i].class]['score'] = 0;
//   }
//
//   for(var j = 0; j<students.length; j++){
//     if(students[j].score > myResult[students[j].class]['score']){
//       myResult[students[j].class]['name'] = students[j].name;
//       myResult[students[j].class]['score'] = students[j].score;
//     }
//   }
//   return myResult;
// }
//

function highestScore(students){
  var myResult = new Object();
  for(var i = 0; i < students.length; i++){
    if(myResult[students[i].class] === undefined){
      myResult[students[i].class] = new Object();
      myResult[students[i].class]['name'] = '';
      myResult[students[i].class]['score'] = 0;
    }
    if(students[i].score > myResult[students[i].class]['score']){
      myResult[students[i].class]['name'] = students[i].name;
      myResult[students[i].class]['score'] = students[i].score;
    }
  }
  return myResult;
}
// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
