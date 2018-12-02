/**
 Dalam sebuah web user diwajibkan memiliki user dan roles
 terdapat beberapa role yang tesedia dimana setiap role dapat mengakses menu yang berbeda sebgai berikut
 1) Non-member
    - Home
    - Login
 2) Author
    - Home
    - Logout
    - Create Article
    - Edit Own Article
    - Delete Own Article
  3) Editor
    - Home
    - Logout
    - Edit Article

  Buatlah program yang menampilkan user dan menu yang di akses, dengan kriteria sebagi berikut
  - jika user atau role tidak diisi maka secara otomatis memiliki roles Non-meber
  - jika user dibawah 5 karakter tampilkan pesan "Login failed"
  - jika role tidak sesuai maka tampilkan pesan "Login failed"

  Contoh 1:
  -----------------
  var user = ''
  var role = ''

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Login'


  Contoh 2:
  -----------------
  var user = 'Hellios'
  var role = 'Editor'

  Output
  -----
  'Hellios dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'

  Contoh 3:
  -----------------
  var user = 'Hello'
  var role = 'Editor'

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'


  Contoh 4:
  -----------------
  var user = 'Hello'
  var role = 'Editors'

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'

  Wajib dilengkapi dengan alghoritma atau pseudocode
 */


 /*
 PSEUODOCODE
 ---------------------------------------
 1. STORE `user` with any value.
 2. STORE `role` with any value.
 3. IF `user` equals empty / ('') OR `role` equals empty / ('').
 4.     THEN DISPLAY 'Guest user dapat mengakses menu'
                    '- Home'
                    '- Login'
  5. ELSE IF `role` equals 'Author' AND `user`.length greater than equals 5.
  6.     THEN DISPLAY `user` + ' dapat mengakses menu'
                    '- Home'
                    '- Logout'
                    '- Create Article'
                    '- Edit Own Article'
                    '- Delete Own Article'
  7. ELSE IF `role` equals 'Editor' AND `user`.length greater than equals 5.
  8.     THEN DISPLAY `user` + ' dapat mengakses menu'
                    '- Home'
                    '- Logout'
                    '- Edit Article'
  9. else {
        THEN DISPLAY 'Login Failed'.
  }
  */

var user = 'Hellios';
var role = 'Editor';

if(user === '' || role === ''){
    console.log('Guest user dapat mengakses menu');
    console.log('- Home');
    console.log('- Login');
} else if(role === 'Author' && user.length >= 5) {
  console.log(user + ' dapat mengakses menu');
  console.log('- Home');
  console.log('- Logout');
  console.log('- Create Article');
  console.log('- Edit Own Article');
  console.log('- Delete Own Article');

} else if(role === 'Editor' && user.length >= 5) {
  console.log(user + ' dapat mengakses menu');
  console.log('- Home');
  console.log('- Logout');
  console.log('- Edit Article');
} else{
  console.log('Login failed')
}
