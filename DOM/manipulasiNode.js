// Tahapan
// buat element baru
const pNew = document.createElement("p");
// buat isi dari element
const textPNew = document.createTextNode("paragraf baru");
//simpan ke paragraf
pNew.appendChild(textPNew);
//simpan pNew ke html section A
// seleksi lokasinya
const sectionA = document.getElementById("a");
// kirim ke lokasi, sebagai element terakhir
sectionA.appendChild(pNew);

// Insert Before
const liNew = document.createElement("li");
const textLiNew = document.createTextNode("item baru");
//masukin teks ke liNew
liNew.appendChild(textLiNew);
// seleksi lokasi parentnya
const ul = document.querySelector("section#b ul");
//seleksi lokasi ingin disimpan childnya, yaitu ke 2
const li2 = ul.querySelector("li:nth-child(2)");
//insert sebelumnya(isi, lokasi element sesudah)
ul.insertBefore(liNew, li2);

// Remove
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// Replace
//parentnya atau scope
const sectionB = document.getElementById("b");
//childnya
const p4 = sectionB.querySelector("p");
//buat element baru
const h2New = document.createElement("h2");
const textH2 = document.createTextNode("Judul baru");
//masukin teks ke h2
h2New.appendChild(textH2);
//replace deh
sectionB.replaceChild(h2New, p4);

pNew.style.backgroundColor = "lightgreen";
liNew.style.backgroundColor = "lightgreen";
h2New.style.backgroundColor = "lightgreen";
