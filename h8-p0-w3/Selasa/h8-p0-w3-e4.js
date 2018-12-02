var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(arr) {
  var correct = ["Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "Pria", "SMA Internasional Metro"];
  var x = 0;
  for (var i = 1; i<=5; i++){
    if(i === 3){
      continue;
    } else {
      arr.splice(i, 1, correct[x]);
    }
    x++;
  }
  console.log(arr);

  var bulan = arr[3].split("/");
  switch (bulan[1]) {
    case "01":
      var namaBulan = "Januari";
      break;
    case "02":
      var namaBulan = "Februari";
      break;
    case "03":
      var namaBulan = "Maret";
      break;
    case "04":
      var namaBulan = "April";
      break;
    case "05":
      var namaBulan = "Mei";
      break;
    case "06":
      var namaBulan = "Juni";
      break;
    case "07":
      var namaBulan = "Juli";
      break;
    case "08":
      var namaBulan = "Agustus";
      break;
    case "09":
      var namaBulan = "September";
      break;
    case "10":
      var namaBulan = "Oktober";
      break;
    case "11":
      var namaBulan = "November";
      break;
    case "12":
      var namaBulan = "Desember";
      break;
    default:
      var namaBulan = "Invalid Month";
  }
  console.log(namaBulan);

  console.log(bulan.sort(function(a,b){return b-a}));

  console.log(arr[3].split("/").join("-"));

  console.log(arr[1].slice(0,15));
}

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
