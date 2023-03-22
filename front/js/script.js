// Script pour la page d'accueil
fetch("http://localhost:3000/api/products")
  .then((reponse) => reponse.json())
  .then((canape) => ajouterProduit(canape));

// Création des éléments HTML
function ajouterProduit(canape) {
  canape.forEach((iteration) => {
    const { _id, imageUrl, altTxt, name, description } = iteration;

    const ancre = makeAncre(_id);
    const article = document.createElement("article");
    const image = makeImage(imageUrl, altTxt);
    const h3 = makeH3(name);
    const p = makeP(description);

    appendproduit(ancre, article);
    appendArticle(article, image, h3, p);
  });
}

// Création anchor
function makeAncre(_id) {
  const ancre = document.createElement("a");
  ancre.href = "./product.html?_id=" + _id;
  return ancre;
}

// Création produit
function appendproduit(ancre, article) {
  const produit = document.querySelector("#items");
  produit.appendChild(ancre);
  ancre.appendChild(article);
}

// Création article
function appendArticle(article, image, h3, p) {
  article.appendChild(image);
  article.appendChild(h3);
  article.appendChild(p);
}

// Création image
function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  return image;
}

// Création h3
function makeH3(name) {
  const h3 = document.createElement("h3");
  h3.textContent = name;
  h3.classList.add("productName");
  return h3;
}

// Création paragraphe
function makeP(description) {
  const p = document.createElement("p");
  p.textContent = description;
  return p;
}
