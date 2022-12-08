var noAngkot = 1,
  angkotBeroperasi = 6,
  jmlAngkot = 10;

//dengan while dan for
/*
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot " + noAngkot + " beroperasi dengan baik");

  noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot < jmlAngkot; noAngkot++) {
  console.log("Angkot " + noAngkot + " tidak beroperasi dengan baik");
}*/

//dengan for dan ifelse
for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot == 8) {
    console.log("Angkot " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot " + noAngkot + " tidak beroperasi dengan baik");
  }
}
