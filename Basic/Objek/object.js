//Membuat Objek

// //Cara 1 - Objek literal
// var mhs = {
//   nama: "Fathoni Zikri",
//   umur: "19",
//   jenisKelamin: "Laki-Laki",
//   jurusan: "RPL",
//   alamat: {
//     jalan: "Haji Sontong",
//     kota: "Tangerang Selatan",
//     propinsi: "Banten",
//   },
// };

//Cara 2 - Function declaration
// function createObjectMhs(nama, nim, jurusan, tahunAngkatan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.jurusan = jurusan;
//   mhs.tahunAngkatan = tahunAngkatan;
//   return mhs;
// }

// var mhs1 = createObjectMhs("Fathoni", "2000696", "RPL", "2020");

//Cara 3 - Constructor
function Mahasiswa(nama, nim, jurusan, tahunAngkatan) {
  this.nama = nama;
  this.nim = nim;
  this.jurusan = jurusan;
  this.tahunAngkatan = tahunAngkatan;
}

var mhs2 = new Mahasiswa("Fathoni", "2000696", "RPL", "2020"); //new harus ada, kalau ngga ada dikira panggil deklarasi sehingga butuh return dan deklarasi array
