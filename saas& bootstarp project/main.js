let mapSection = document.getElementsByClassName("mapSection");

let a = document.createElement("a");
let textMap = document.createTextNode("This is link");
a.href = "https://www.google.com/maps/@26.9060999,30.8768375,6z";
document.body.appendChild(a);
mapSection[0].addEventListener("click", () => {
  return a;
});
