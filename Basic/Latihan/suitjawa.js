var ulang = true;

while (ulang) {
  //player
  var player = prompt("Masukkan pilihan (Gajah, orang, semut)");
  if (player != "gajah" && player != "orang" && player != "semut") {
    alert("pilihan salah");
  }

  //com
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "semut";
  } else {
    comp = "orang";
  }

  //peraturan suit
  /*
//Menggunakan op logika
var hasil = "";
if (
  (player == "gajah" && comp == "orang") ||
  (player == "orang" && comp == "semut") ||
  (player == "semut" && comp == "gajah")
) {
  hasil = "menang";
} else if (
  (player == "orang" && comp == "gajah") ||
  (player == "semut" && comp == "orang") ||
  (player == "gajah" && comp == "semut")
) {
  hasil = "kalah";
} else {
  hasil = "seri";
}
*/
  //Menggunakan ternarry
  if (player == comp) {
    hasil = "seri";
  } else if (player == "gajah") {
    hasil = comp == "orang" ? "Menang" : "Kalah";
  } else if (player == "orang") {
    hasil = comp == "semut" ? "Menang" : "Kalah";
  } else if (player == "semut") {
    hasil = comp == "gajah" ? "Menang" : "Kalah";
  } else {
    alert("pilihan salah");
  }

  //Hasil
  alert(
    "Kamu pilih " +
      player +
      " sedangkan Komputer " +
      comp +
      ". Maka Kamu " +
      hasil
  );

  ulang = confirm("Lagi ?");
}

alert("Terimakasih Sudah bermain");
