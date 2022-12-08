// const judul = document.getElementById("judul");
// judul.innerHTML = "Fathoni Zikri Nugroho";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello world";

// const judul = document.querySelector("#judul");
// judul.style.color = "orange";
// judul.style.backgroundColor = "grey";

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "fathoni"); //nambah atribut pada element
// judul.getAttribute("id"); //lihat isi atribut pada element
// judul.removeAttribute("judul"); //hapus atribut

//mengelola class
const p2 = document.querySelector(".p2");
p2.classList.add("label"); //tambah
p2.classList.remove("label"); //hapus class
p2.classList.toggle("label"); //klo ada dihapus, klo blum ditambahin

document.body.classList.toggle("biru-muda"); // buat ganti warna, bisa disimpan pada tombol

p2.classList.contains("label"); //nanya ada apa ngga class label
p2.classList.replace("label", "tag");
