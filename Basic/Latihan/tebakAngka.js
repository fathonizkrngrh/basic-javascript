var ulang = true;

while (ulang) {
  //Angka comp
  var comp = Math.random();
  if (comp < 0.1) {
    comp = 1;
  } else if (comp >= 0.1 && comp < 0.2) {
    comp = 2;
  } else if (comp >= 0.2 && comp < 0.3) {
    comp = 3;
  } else if (comp >= 0.3 && comp < 0.4) {
    comp = 4;
  } else if (comp >= 0.4 && comp < 0.5) {
    comp = 5;
  } else if (comp >= 0.5 && comp < 0.6) {
    comp = 6;
  } else if (comp >= 0.6 && comp < 0.7) {
    comp = 7;
  } else if (comp >= 0.7 && comp < 0.8) {
    comp = 8;
  } else if (comp >= 0.8 && comp < 0.9) {
    comp = 9;
  } else if (comp >= 0.9 && comp < 1) {
    comp = 10;
  } else {
    alert("Masukkan Bilangan Bulat !!!");
  }

  //Cek angka
  //Angka player

  for (i = 2; i >= 0; i--) {
    var player = prompt("Masukkan Angka 1-10");
    var hasil = "",
      Keterangan = "";
    if (player == comp) {
      alert("Tebakanmu benar");
      i = 0;
    } else {
      hasil = "Salah";
      if (player > comp) {
        Keterangan = " Terlalu Tinggi";
      } else if (player < comp) {
        Keterangan = " Terlalu Rendah";
      }
      alert("Tebakanmu Salah" + Keterangan + "\n Percobaan sisa " + i);
    }
  }

  ulang == confirm("Lagi? ");
}
