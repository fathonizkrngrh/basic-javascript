//DOM SELECTION

// //document.getElementById() -> mengembalikan element
const judul = document.getElementById("judul");
judul.style.backgroundColor = "grey";
judul.innerHTML = "Fathoni Zikri Nugroho";

//document.getElementsByTagName() -> mengembalikan html collection (array)
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0]; //mengambil indeks pertama aja
h1.style.fontSize = "50px";

//document.getElementByClassName() ->Mengembalikan html collection
const p1 = document.getElementsByClassName("p1");
p1[0].style.backgroundColor = "white"; //pilih salah satu

//document.querySelector() => mengembalikan 1 element
const p4 = document.querySelector("#b p");
p4.style.color = "green";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "grey";

//document.querySelectorAll() => mengembalikan node list element html
const p = document.querySelectorAll("p")[0]; //pilih salah satu
p.innerHTML = "diubah sama js";

const p1 = document.querySelectorAll("p"); //pilih salah satu
p1[3].innerHTML = "diubah sama js";

const p = document.querySelectorAll("p"); //pilih semua
for (let i = 0; i < p.length; i++) {
  p[i].innerHTML = "diubah sama js";
}

//document sebagai node root dapat diganti dengan element html
