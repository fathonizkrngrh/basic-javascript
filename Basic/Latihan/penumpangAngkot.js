console.log("Aplikasi Penumpang Angkot");
var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      //Namanya sama
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } //Kursi terisi berurutan
      else if (penumpang[i] == namaPenumpang) {
        console.log("Nama Penumpang sudah ada");
        return penumpang;
      } // ada kursi kosong
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
  console.log(penumpang.join(", "));
};

var keluarPenumpang = function (namaPenumpang, penumpang) {
  //jika masih kosong
  if (penumpang.length == 0) {
    console.log("Penumpang masih kosong");
    return penumpang;
  }
  //jika namanya ada dan sesuai
  else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        console.log(penumpang[i] + " berhasil turun");
        penumpang[i] = undefined;
        return penumpang;
      }
      //jika namanya gaada
      else if (i == penumpang.length - 1) {
        console.log("Penumpang dengan nama " + namaPenumpang + " tidak ada");
        return penumpang;
      }
    }
  }
  console.log(penumpang.join(", "));
};

// var cetak = function (namaPenumpang, i) {
//   // (elemennya, indeksnya)
//   console.log("Kursi ke-" + (i + 1) + " = " + namaPenumpang);
// };

// penumpang.forEach(cetak);
