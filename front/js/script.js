fetch("http://localhost:3000/api/products")
  .then((reponse) => reponse.json())
  .then((canape) => ajouterProduit(canape));

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
function makeAncre(_id) {
  const ancre = document.createElement("a");
  ancre.href = "./product.html?_id=" + _id;
  return ancre;
}
function appendproduit(ancre, article) {
  const produit = document.querySelector("#items");
  produit.appendChild(ancre);
  ancre.appendChild(article);
}
function appendArticle(article, image, h3, p) {
  article.appendChild(image);
  article.appendChild(h3);
  article.appendChild(p);
}

function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  return image;
}
function makeH3(name) {
  const h3 = document.createElement("h3");
  h3.textContent = name;
  h3.classList.add("productName");
  return h3;
}
function makeP(description) {
  const p = document.createElement("p");
  p.textContent = description;
  return p;
}

// "colors": [
// "Blue",
// "White",
// "Black"
// ],
// "__id": "107fb5b75607497b96722bda5b504926",
// "name": "Kanap Sinopé",
// "price": 1849,
// "imageUrl": "http://localhost:3000/images/kanap01.jpeg",
// "description": "Excepteur sint occaecat cupicanapet non pro_ident, sunt in culpa qui officia deserunt mollit anim _id est laborum.",
// "altTxt": "Photo d'un canapé bleu, deux places"

// <!-- <a href="./product.html?_id=42">
//           <article>
//             <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
//             <h3 class="productName">Kanap name1</h3>
//             <p class="productDescription">Dis enim malesuada risus sapien grav_ida nulla nisl arcu. Dis enim malesuada risus sapien grav_ida nulla nisl arcu.</p>
//           </article>
//         </a> -->
