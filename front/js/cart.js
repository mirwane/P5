const article = document.createElement("article");
const cart__items = document.querySelector("#cart__items");
cart__items.appendChild(article);
const ItemImg = document.createElement("div");
ItemImg.classList.add("cart__item__img");
article.appendChild(ItemImg);
const image = document.createElement("img");
image.src = `http://localhost:3000/images/kanap01.jpeg`;
// image.alt =
ItemImg.appendChild(image);
const ItemContent = document.createElement("div");
ItemContent.classList.add("cart__item__content");
article.appendChild(ItemContent);
const description = document.createElement("div");
description.classList.add("cart__item__content__description");
ItemContent.appendChild(description);
const name = document.createElement("h2");
name.textContent = "test";
description.appendChild(name);
const color = document.createElement("p");
color.textContent = "test";
description.appendChild(color);
const price = document.createElement("p");
price.textContent = "test";
description.appendChild(price);
const settings = document.createElement("div");
settings.classList.add("cart__item__content__settings");
ItemContent.appendChild(settings);
const quantity = document.createElement("div");
quantity.classList.add("cart__item__content__description__quantity");
settings.appendChild(quantity);
const quantityp = document.createElement("p");
quantityp.textContent = "Qté :";
quantity.appendChild(quantityp);
const quantityinput = document.createElement("input");
quantityinput.type = "number";
quantityinput.classList.add("itemQuantity");
quantityinput.name = "itemQuantity";
quantityinput.min = "1";
quantityinput.max = "100";
quantityinput.value = "1";
quantity.appendChild(quantityinput);
const settingsdelete = document.createElement("div");
settingsdelete.classList.add("cart__item__content__description__delete");
settings.appendChild(settingsdelete);
const deleteItem = document.createElement("p");
deleteItem.classList.add("deleteItem");
deleteItem.textContent = "Supprimer";
settingsdelete.appendChild(deleteItem);
// <!-- 1<article
//
//        1<div class="cart__item__img">
//                          1<img
//                                    src="../images/product01.jpg"
//                                     alt="Photographie d'un canapé"
//                   />
//                 </div>
//         2<div class="cart__item__content">
//                   1<div class="cart__item__content__description">
//                          6<h2>Nom du produit</h2>
//                          7<p>Vert</p>
//                          8<p>42,00 €</p>
//                   </div>
//                   2<div class="cart__item__content__settings">
//                           10<div class="cart__item__content__settings__quantity">
//                           11<p>Qté :</p>
//                           12<input
//                         type="number"
//                         class="itemQuantity"
//                         name="itemQuantity"
//                         min="1"
//                         max="100"
//                         value="42"
//                       />
//                     </div>
//                           13<div class="cart__item__content__settings__delete">
//                              14<p class="deleteItem">Supprimer</p>
//                     </div>
//                   </div>
//                 </div>
//               </article> -->
