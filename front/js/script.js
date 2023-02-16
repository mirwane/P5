fetch("http://localhost:3000/api/products")
  .then((reponse) => reponse.json())
  .then((data) => ajouterProduit(data));
function ajouterProduit(data) {
  const id = data[0]._id;
  // console.log("./product.html?id=", id);
  const ancre = document.createElement("a");
  ancre.href = "./product.html?id=" + id;
  ancre.text = "lien";
  const produit = document.querySelector("#items");
  produit.appendChild(ancre);
}

// article.appendChild(image);
// article.appendChild(titre);
// article.appendChild(description);
// const article = document.createElement("article");
// const image = document.createElement("img");
// const titre = document.createElement("h3");
// const description = document.createElement("p");

// "colors": [
// "Blue",
// "White",
// "Black"
// ],
// "_id": "107fb5b75607497b96722bda5b504926",
// "name": "Kanap Sinopé",
// "price": 1849,
// "imageUrl": "http://localhost:3000/images/kanap01.jpeg",
// "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// "altTxt": "Photo d'un canapé bleu, deux places"

// <!-- <a href="./product.html?id=42">
//           <article>
//             <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
//             <h3 class="productName">Kanap name1</h3>
//             <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
//           </article>
//         </a> -->
