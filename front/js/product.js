const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("_id");

fetch(`http://localhost:3000/api/products/${id}`)
  .then((reponse) => reponse.json())
  .then((id) => ajouterInfos(id));

function ajouterInfos(canape) {
  const { colors, price, imageUrl, altTxt, name, description } = canape;
  makeImage(imageUrl, altTxt);
  makePrice(price);
  makeName(name);
  makeDescription(description);
  makeColor(colors);
}
function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  const item__img = document.querySelector(".item__img");
  item__img.appendChild(image);
}
function makeName(name) {
  const nom = document.querySelector("#title");
  nom.textContent = name;
}
function makePrice(price) {
  const prix = document.querySelector("#price");
  prix.textContent = price;
}
function makeDescription(description) {
  const p = document.querySelector("#description");
  p.textContent = description;
}
function makeColor(colors) {
  const select = document.querySelector("#colors");
  colors.forEach((couleurs) => {
    const option = document.createElement("option");
    option.value = couleurs;
    option.textContent = couleurs;
    select.appendChild(option);
  });
}
