var s = "";
/*
console.log("- Segitiga 1 \n");
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

console.log("- Segitiga 2 \n");
for (var i = 1; i <= 5; i++) {
  for (var j = i; j <= 5; j++) {
    s+= "*";
  }
  s += "\n";
}
console.log(s);
console.log("- Segitiga 3 \n");
for (var i = 1; i <= 5; i++) {
  for (var j = i; j <= 5; j++) {
    s+= " ";
  }
  for (var k = 1; k <= i; k++) {
    s+= "*";
  }
  s += "\n";
}
console.log(s);
console.log("- Segitiga 4 \n");
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    s+= " ";
  }
  for (var k = i; k <= 5; k++) {
    s+= "*";
  }
  s += "\n";
}
console.log(s);
console.log("- Piramida 1 \n");
for (var i = 1; i <= 5; i++) {
  for (var j = i; j <= 5; j++) {
    s+= " ";
  }
  for (var k = 1; k <= i; k++) {
    s+= "*";
  }
  for (var l = 1; l <= i - 1; l++) {
    s+= "*";
  }
  s += "\n";
}
console.log(s);

*/
console.log("- Piramida 2");
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    s += " ";
  }
  for (var k = i; k <= 5; k++) {
    s += "*";
  }
  for (var l = i + 1; l <= 5; l++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
