// Method pada array

var arr = ["Kucing", "Anjing", "Babi", "Monyet"];
var angkaAcak = [1, 4, 5, 2, 7, 8, 20, 65];
var angka = [0, 1, 2, 3, 4, 5, 6, 7, 8];
/*
//1.join ==> Gabung array dan ubah objek jadi string. () bisa diisi string
console.log(arr.join(" - "));

//2. length ==> jumlah data pada array
for (var i = 0; i < arr.length; i++) {
  console.log("Nama hewan ke-" + (i + 1) + " = " + arr[i]);
}

//3. push ==> masukin ke akhir array
console.log("\n Push ");
arr.push("Ikan", "Bebek"); //bisa diisi banyak.
console.log(arr.join(", "));

//4. pop ==> keluarin data akhir
console.log("\n Pop ");
arr.pop(); //cuma satu kali aja
console.log(arr.join(", "));

//5. unshift ==> masukin di awal array
console.log("\n Unshift ");
arr.unshift("Harimau", "Tikus");
console.log(arr.join(", "));

//6. shift ==> keluarin data pertama array
console.log("\n Shift ");
arr.shift();
console.log(arr.join(", "));

//7. splice ==> menyisipkan elemen di mana saja array
console.log("\n Splice ");
arr.splice(1, 1, "Hamster"); // (indeks sebelumnya, ada yg dihapus?, elemen yang ditambah boleh banyak)
console.log(arr.join(", "));


//8. slice ==> Menghapus elemen yang ada di dalam array
console.log("\n Slice ");
arr.slice(1, 2); //(indeks elemen awal yg dihapus, indeks sesudah elemen yg dihapus/ tidak ikut kehapus)
console.log(arr.join(", "));


//9. forEach ==> tidak mengembalikan array
var cetak = function (e, i) {
  // (elemennya, indeksnya)
  console.log("Hewan ke-" + (i + 1) + " = " + e);
};

arr.forEach(cetak);

//10. map ==> mengembalikan nilai array
var angka = [1, 2, 3, 4, 5, 6, 7, 8];

var kaliDua = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join(", "));

//11. Sort ==> Ngurutin Angka awalnya aja
var angkaAcak = [1, 4, 5, 2, 7, 8, 20, 65];

//jika urut angka depan saja
angkaAcak.sort();
console.log(angkaAcak.join(", "));

//jika urut sesuai angka
angkaAcak.sort(function (a, b) {
  return a - b;
});
console.log(angkaAcak.join(", "));
*/

//12. Filter ==> mecari sesuai ketagori
var angkaAsli = angka.filter(function (e) {
  return e > 0;
});
console.log(angkaAsli.join(" - "));

//13. find ==> mencari hanya satu nilai
var angka2 = angka.find(function (e) {
  return e > 5;
});
console.log(angka2);
