function changeMe(arr) {
  // you can only write your code here!
  var tahunNow = 2018;
  for(var i = 0; i < arr.length;i++){
    if(arr[i][3] <= tahunNow && arr[i][3]){
      age = tahunNow - arr[i][3];
    } else {
      age = 'Invalid Birth Year';
    }

    var myObj = new Object();
        myObj.firstName = arr[i][0];
        myObj.lastName = arr[i][1];
        myObj.gender = arr[i][2];
        myObj.age = age;

        console.log(i+1 +'. ' + myObj.firstName + ' ' + myObj.lastName + ':');
        console.log(myObj);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
