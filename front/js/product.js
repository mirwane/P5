// Script pour la page produit
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("_id");
let itemPrice = 0;
let imgUrl, atlText;

// Récupération des données de l'API
fetch(`http://localhost:3000/api/products/${id}`)
  .then((reponse) => reponse.json())
  .then((id) => ajouterInfos(id));

// Création des éléments HTML
function ajouterInfos(canape) {
  const { colors, price, imageUrl, altTxt, name, description } = canape;
  itemPrice = price;
  imgUrl = imageUrl;
  altText = altTxt;
  makeImage(imageUrl, altTxt);
  makePrice(price);
  makeName(name);
  makeDescription(description);
  makeColor(colors);
}

// Création image
function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  const item__img = document.querySelector(".item__img");
  item__img.appendChild(image);
}

// Création nom
function makeName(name) {
  const nom = document.querySelector("#title");
  nom.textContent = name;
}

// Création prix
function makePrice(price) {
  const prix = document.querySelector("#price");
  prix.textContent = price;
}

// Création description
function makeDescription(description) {
  const p = document.querySelector("#description");
  p.textContent = description;
}

// Création couleur
function makeColor(colors) {
  const select = document.querySelector("#colors");
  colors.forEach((couleurs) => {
    const option = document.createElement("option");
    option.value = couleurs;
    option.textContent = couleurs;
    select.appendChild(option);
  });
}

// Ajout au panier
const button = document.querySelector("#addToCart");
button.addEventListener("click", (e) => {
  const colors = document.querySelector("#colors").value;
  const quantity = document.querySelector("#quantity").value;
  if (orderInvalide(colors, quantity)) return;
  panier(colors, quantity);
  redirection();
});

// Ajout au local storage
function panier(color, quantity) {
  const data = {
    color: color,
    quantity: Number(quantity),
    id: id,
    imageUrl: imgUrl,
    altTxt: altText,
  };
  const key = id + "_" + color;
  let storedData = JSON.parse(localStorage.getItem(key));
  if (storedData && storedData.color === color) {
    data.quantity += storedData.quantity;
  }
  localStorage.setItem(key, JSON.stringify(data));
}

// Vérification des données
function orderInvalide(colors, quantity) {
  if (colors == null || colors === "" || quantity == null || quantity == 0) {
    alert("selectionnez une couleur et une quantité");
    return true;
  }
}

// Redirection vers le panier
function redirection() {
  window.location.href = "cart.html";
}
