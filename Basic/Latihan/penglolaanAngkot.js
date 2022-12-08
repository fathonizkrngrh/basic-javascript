//Membuat Objek Angkot

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  //Penumpang naik
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    //jika masih kosong
    if (this.penumpang.length == 0) {
      console.log("Penumpang masih kosong");
      return false;
    }
    //jika namanya ada dan sesuai
    else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          console.log(this.penumpang[i] + " berhasil turun");
          this.penumpang[i] = undefined;
          this.kas += bayar; //bayarnya masuk ke kas
          return this.penumpang;
        }
        //jika namanya gaada
        else if (i == this.penumpang.length - 1) {
          console.log("Penumpang dengan nama " + namaPenumpang + " tidak ada");
          return false;
        }
      }
    }
  };
}

var angkot1 = new Angkot(
  "Fathoni",
  ["Cikokol", "Ciledug"],
  ["Fathoni", "Marini"],
  0
);
var angkot2 = new Angkot("Marini", ["Cikokol", "Ciledug"], [], 0);
