const p3 = document.querySelector(".p3");

function ubahWarna() {
  p2.style.backgroundColor = "lightgreen";
}

// EVENT HANDLER
const p2 = document.querySelector(".p2");
p2.onclick = ubahWarna;

// addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  // nambah item
  const liNew = document.createElement("li");
  const textLiNew = document.createTextNode("item baru");
  liNew.appendChild(textLiNew);
  const ul = document.querySelector("section#b ul");
  ul.appendChild(liNew);
});
