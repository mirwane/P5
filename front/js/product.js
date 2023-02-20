const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("_id");

fetch(`http://localhost:3000/api/products/${id}`)
  .then((reponse) => reponse.json())
  .then((id) => ajouterInfos(id));

function ajouterInfos(canape) {
  const { colors, price, imageUrl, altTxt, name, description, _id } = canape;
  makeImage(imageUrl, altTxt);
  makePrix(price);
  makeName(name);
  makeDescription(description);
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
function makePrix(price) {
  const prix = document.querySelector("#price");
  prix.textContent = price;
}
function makeDescription(description) {
  const p = document.querySelector("#description");
  p.textContent = description;
}

//  <p id="description">
//                   <!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. -->
//                 </p>

/* <select name="color-select" id="colors">
                    <option value="">--SVP, choisissez une couleur --</option>
                    <!--                       <option value="vert">vert</option>
                      <option value="blanc">blanc</option> -->
                  </select> */
