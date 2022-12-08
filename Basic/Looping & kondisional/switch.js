var makanan = prompt(
  "Masukkan makanan/minuman : (cth nasi, ayam, daging, burger, coca cola, susu, wedang)"
);

switch (makanan) {
  case "nasi":
  case "ayam":
  case "daging":
  case "susu":
  case "wedang":
    alert(makanan + " termasuk Makanan/Minuman sehat");
    break;
  case "coca cola":
  case "burger":
    alert(makanan + " termasuk makanan/minuman tidak sehat");
    break;
  default:
    alert("inputan salah");
    break;
}
