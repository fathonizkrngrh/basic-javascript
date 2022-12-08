const buttonUbahWarna = document.getElementById("buttonUbahWarna");

buttonUbahWarna.addEventListener("click", function () {
  //   document.body.setAttribute("class", "pink-muda");
  document.body.classList.toggle("pink-muda");
});

const buttonRandomWarna = document.createElement("button");
const textButton = document.createTextNode("Acak Warna");
buttonRandomWarna.appendChild(textButton);
buttonRandomWarna.setAttribute("type", "button");
buttonUbahWarna.after(buttonRandomWarna);

buttonRandomWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// menghubungkan element js dan html slider
const sliderMerah = document.querySelector("input[name=sliderMerah]");
const sliderHijau = document.querySelector("input[name=sliderHijau]");
const sliderBiru = document.querySelector("input[name=sliderBiru]");

sliderMerah.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
sliderHijau.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
sliderBiru.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

const mouseWarna = document.createElement("button");
const textButtonMouseWarna = document.createTextNode("Mouse Warna");
mouseWarna.appendChild(textButtonMouseWarna);
mouseWarna.setAttribute("type", "button");
buttonRandomWarna.after(mouseWarna);

mouseWarna.addEventListener("click", function () {
  document.body.addEventListener("mousemove", function () {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);
    document.body.style.backgroundColor =
      "rgb(" + xPos + ", " + yPos + ", 100)";
  });
});
